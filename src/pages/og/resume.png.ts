import { ogPngResponse } from '../../lib/og-response';
import { ogResume } from '../../lib/og-specs';

export async function GET() {
  return ogPngResponse(ogResume);
}
