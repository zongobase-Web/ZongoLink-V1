/**
 * ISO 8601 date-time string used for transport-friendly timestamps.
 * Keeping timestamps as strings avoids locking the app to a specific runtime
 * date representation when data later crosses storage, messaging, or voice APIs.
 */
export type ISODateTimeString = string;

/**
 * Unique identifier for a room.
 */
export type RoomId = string;

/**
 * Unique identifier for a participant.
 */
export type ParticipantId = string;

/**
 * Human-friendly code used to join a room.
 */
export type JoinCode = string;

/**
 * Encoded QR payload for joining a room.
 */
export type QrCodeData = string;

/**
 * Supported participant roles inside a room.
 */
export type ParticipantRole = 'host' | 'participant';

/**
 * Participant model for a room session.
 * This intentionally stays focused on identity and role so future messaging,
 * voice, and sharing models can reference participants without duplicating
 * participant profile data.
 */
export interface Participant {
  /** Unique participant identifier. */
  participantId: ParticipantId;

  /** Display name shown to other participants. */
  displayName: string;

  /** Permission role for the participant. */
  role: ParticipantRole;

  /** ISO 8601 timestamp for when the participant joined the room. */
  joinedAt: ISODateTimeString;
}

/**
 * Room model for the core ZongoLink room domain.
 * The participants list is embedded for the initial app model while still
 * allowing future messaging and voice records to reference roomId and
 * participantId independently.
 */
export interface Room {
  /** Unique room identifier. */
  roomId: RoomId;

  /** Human-readable room name. */
  roomName: string;

  /** Human-friendly join code for participants. */
  joinCode: JoinCode;

  /** Encoded QR payload that can later be rendered by a QR UI. */
  qrCodeData: QrCodeData;

  /** Participant identifier for the host. */
  hostId: ParticipantId;

  /** ISO 8601 timestamp for when the room was created. */
  createdAt: ISODateTimeString;

  /** Participants currently associated with the room. */
  participants: Participant[];
}
