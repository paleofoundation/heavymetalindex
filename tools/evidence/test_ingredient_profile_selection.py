"""Regression tests for selecting exact WHO strata, independent of corpus size."""
import ast
from pathlib import Path
import unittest

script = Path(__file__).resolve().parents[1] / 'populate_contamination_profiles.py'
tree = ast.parse(script.read_text())
selection = next(node for node in tree.body if isinstance(node, ast.FunctionDef) and node.name == 'who_lookup')
namespace = {}
exec(compile(ast.Module(body=[selection], type_ignores=[]), str(script), 'exec'), namespace)

class SelectionTests(unittest.TestCase):
    def setUp(self):
        self.raw = {'metal_species': 'iAs', 'food_name': 'Cucumber', 'n_rows': '5', 'basis': 'as_consumed', 'region_name': 'EURO', 'food_state': 'Raw', 'year_min': '2009', 'year_max': '2009', 'p10_lower_bound_ug_kg': '0.458', 'p90_lower_bound_ug_kg': '7.14', 'p95_lower_bound_ug_kg': '7.32', 'max_lower_bound_ug_kg': '7.5'}
        self.dry = {**self.raw, 'basis': 'dry_weight', 'n_rows': '500', 'p90_lower_bound_ug_kg': '774.8'}
        namespace['who_raw'] = {('cucumber', 'iAs'): [self.dry, self.raw]}
        self.scope = {'basis': 'as_consumed', 'geography': 'EURO', 'food_state': 'Raw', 'year_min': '2009', 'year_max': '2009'}

    def test_largest_n_cannot_select_another_basis(self):
        selected = namespace['who_lookup']('cucumber', 'iAs', self.scope)
        self.assertEqual(selected['p90'], 7.14)
        self.assertEqual(selected['row']['basis'], 'as_consumed')

    def test_missing_basis_and_period_do_not_guess_a_stratum(self):
        self.assertIsNone(namespace['who_lookup']('cucumber', 'iAs', {}))

    def test_ambiguous_duplicates_require_adjudication(self):
        namespace['who_raw'][('cucumber', 'iAs')].append(self.raw.copy())
        self.assertIsNone(namespace['who_lookup']('cucumber', 'iAs', self.scope))

if __name__ == '__main__':
    unittest.main()
