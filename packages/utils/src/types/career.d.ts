export interface ICareerItem {
  id: string;
  corp: string;
  summary: string;
  period: stirng;
  roles: { id: string; content: string }[];
}
