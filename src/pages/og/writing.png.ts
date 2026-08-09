import { ogPngResponse } from '../../lib/og-response';
import { ogWriting } from '../../lib/og-specs';

export async function GET() {
  return ogPngResponse(ogWriting);
}
