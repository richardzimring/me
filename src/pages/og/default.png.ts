import { ogPngResponse } from '../../lib/og-response';
import { ogHome } from '../../lib/og-specs';

export async function GET() {
  return ogPngResponse(ogHome);
}
