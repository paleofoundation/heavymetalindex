#!/usr/bin/env python3
"""Regression checks for truncation-adjacent reconciliation and ND semantics."""
import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location("tds", Path(__file__).with_name("build-fda-tds-evidence.py"))
tds = importlib.util.module_from_spec(spec)
spec.loader.exec_module(tds)


class ReconciliationTests(unittest.TestCase):
    def setUp(self):
        self.group = [{"TDSFoodNumber": "1", "Analyte": "Lead", "Concentration": "0"} for _ in range(27)]
        self.published = {"C": "27", "E": "0", "F": "27", "I": "ND", "J": "ND"}

    def test_truncated_group_rejected(self):
        with self.assertRaisesRegex(ValueError, "count disagreement"):
            tds.reconcile(self.group[:-1], self.published)

    def test_zero_code_requires_primary_non_detect_agreement(self):
        self.assertEqual(tds.reconcile(self.group, self.published), "counts_and_extrema_verified")
        self.published["J"] = "0"
        with self.assertRaisesRegex(ValueError, "censor/extrema disagreement"):
            tds.reconcile(self.group, self.published)

    def test_censoring_bounds_do_not_hide_positive_tail(self):
        lower = [0] * 26 + [600]
        upper = [50] * 26 + [600]
        self.assertEqual(tds.percentile(lower, 0.95), 0)
        self.assertEqual(tds.percentile(upper, 0.95), 50)
        self.assertEqual(max(lower), 600)

    def test_source_preparation_wins_over_ingredient_form(self):
        self.assertIn("as-prepared", tds.food_basis("BF, cereal, rice, dry, prepared with water"))
        self.assertIn("cooked form", tds.food_basis("Lentils, dry, cooked"))
        self.assertIn("as-sold dry-product", tds.food_basis("BF, infant formula, milk-based, powdered"))
        self.assertNotIn("dry-product", tds.food_basis("Salami, dry/hard"))


if __name__ == "__main__":
    unittest.main()
