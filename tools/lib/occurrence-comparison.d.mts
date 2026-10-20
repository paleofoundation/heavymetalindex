export type ComparisonState = {
  kind: 'rated' | 'direct' | 'bounded' | 'context' | 'unavailable';
  level: 'low' | 'moderate' | 'high' | null;
  label: string;
  reference: string;
};
export function comparisonLevel(comparison: unknown): ComparisonState['level'];
export function comparisonState(comparison: unknown, mode?: string): ComparisonState;
export function comparisonSummary(states: Pick<ComparisonState, 'kind'>[]): string;
