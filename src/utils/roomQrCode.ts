import type { RoomQrCodePayload } from '../types';

/**
 * Serializes room join data into the QR code payload.
 * Future scan support can decode the same JSON structure and validate it
 * against RoomQrCodePayload before attempting any join flow.
 */
export function createRoomQrCodeData(payload: RoomQrCodePayload) {
  return JSON.stringify({
    roomId: payload.roomId,
    joinCode: payload.joinCode,
  });
}
