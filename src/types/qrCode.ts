import type { JoinCode, RoomId } from './room';

/**
 * Payload encoded into a room QR code.
 * Keeping this shape typed gives future scan support a stable contract to
 * decode without coupling it to the Create Room page implementation.
 */
export interface RoomQrCodePayload {
  /** Room identifier needed to target the room after scanning. */
  roomId: RoomId;

  /** Human-friendly fallback code shown alongside the QR code. */
  joinCode: JoinCode;
}
