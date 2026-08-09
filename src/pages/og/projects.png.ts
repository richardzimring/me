import { ogPngResponse } from '../../lib/og-response';
import { ogProjects } from '../../lib/og-specs';

export async function GET() {
  return ogPngResponse(ogProjects);
}
