# Product Requirements Document: ZongoLink-V1

## 1. Vision

ZongoLink-V1 is an offline-first Progressive Web App (PWA) that enables nearby users to communicate through the same Wi-Fi network or mobile hotspot without requiring internet access.

The product should make local communication feel simple, familiar, and approachable for non-technical users. People should be able to create or join rooms, exchange messages and media, and participate in voice communication without seeing network details or needing user accounts.

## 2. Mission

The mission of ZongoLink-V1 is to provide a lightweight local communication tool for groups who need to stay connected when internet access is unavailable, unreliable, expensive, or intentionally avoided.

ZongoLink-V1 should help families, schools, communities, small businesses, and event groups communicate in shared local environments using an installable web app that works across modern mobile and desktop browsers.

## 3. Product Goals

- Enable communication between users connected to the same Wi-Fi network or mobile hotspot.
- Provide an offline-first PWA experience that does not depend on a cloud server.
- Support multiple rooms so different groups or conversations can remain separate.
- Allow users to create, host, and manage local communication rooms.
- Allow participants to join rooms using a passcode or QR code.
- Support text messaging, voice notes, live voice communication, image sharing, file sharing, and video file sharing.
- Make the app installable on supported devices through PWA capabilities.
- Keep the user experience simple, mobile-friendly, and free of technical networking language.

## 4. Non-Goals

- No cloud server dependency for V1.
- No cloud databases.
- No cloud signaling servers.
- No internet servers.
- No user accounts or account-based authentication.
- No internet communication between remote locations.
- No live video calls.
- No video conferencing.
- No screen sharing.
- No social network features, public discovery, or global chat.
- No payment, subscription, or monetization features.
- No AI features in the V1 product experience.

## 5. User Personas

### Family Host

A parent or family member who creates a room so nearby relatives can communicate at home, while traveling, or in an area with limited internet access.

### School Coordinator

A teacher, administrator, or group leader who needs a simple way for students or staff on the same local network to exchange updates without creating accounts.

### Community Organizer

A local organizer coordinating people in a neighborhood, community center, shelter, or temporary gathering where internet access may be unavailable or unreliable.

### Small Business Team Member

A staff member who needs lightweight communication with nearby coworkers using a shared Wi-Fi network or mobile hotspot.

### Event Participant

An attendee, volunteer, or organizer who joins a temporary room using a QR code or passcode to receive updates and share information with the group.

## 6. User Stories

### Host Stories

- As a host, I want to create a room so nearby users can communicate together.
- As a host, I want to manage multiple rooms so different groups or conversations stay separate.
- As a host, I want to share a passcode so participants can join without technical setup.
- As a host, I want to share a QR code so participants can join quickly from a mobile device.
- As a host, I want to end a room so the conversation closes when it is no longer needed.
- As a host, I want to remove a participant so I can manage access to the room.
- As a host, I want to regenerate the join code so old access details no longer work.

### Participant Stories

- As a participant, I want to join a room using a passcode so I can connect quickly.
- As a participant, I want to join a room by scanning a QR code so I do not have to type.
- As a participant, I want to send text messages so I can communicate with the group.
- As a participant, I want to send voice notes so I can share spoken messages.
- As a participant, I want to join live voice communication so I can talk in real time.
- As a participant, I want to share images so I can exchange visual information.
- As a participant, I want to share files and video files so I can exchange useful materials.
- As a participant, I want the app to work without internet so I can use it in limited-connectivity situations.

## 7. Functional Requirements

### Core Feature Scope

ZongoLink-V1 must support the following core features:

- Multiple rooms.
- Room creation.
- Room hosting by the creator.
- Join by passcode.
- Join by QR code.
- Text messaging.
- Voice notes.
- Live voice communication.
- Image sharing.
- File sharing.
- Video file sharing.
- PWA installation.

### Room Management

- Users must be able to create a room.
- The creator of a room must become the host of that room.
- The app must support multiple rooms.
- Each room must have a user-friendly name or label.
- Hosts must be able to end a room.
- Hosts must be able to remove a participant from a room.
- Hosts must be able to regenerate the room join code.
- Ended rooms must no longer accept new participants.

### Room Joining

- Participants must be able to join a room using a passcode.
- Participants must be able to join a room using a QR code.
- Join screens must avoid IP addresses, ports, protocols, and other technical network details.
- Join errors must use plain language and provide clear next steps.
- Regenerated join codes must replace older join codes for new participants.

### Text Messaging

- Users must be able to send and receive text messages within a room.
- Messages should show sender identity, timestamp, and delivery state where appropriate.
- The app should preserve unsent drafts when practical.
- The interface must clearly show the active room.

### Voice Notes

- Users must be able to record and send voice notes.
- Users must be able to receive and play voice notes.
- The app must show clear recording, preview, sending, and playback states.
- Microphone permission issues must be explained in plain language.

### Live Voice Communication

- Users must be able to join live voice communication inside a room.
- Users must be able to mute and unmute themselves.
- Users must be able to leave live voice communication without leaving the room.
- The interface must make active voice participation obvious.
- Live voice communication must not include live video calls in V1.

### Media and File Sharing

- Users must be able to share images.
- Users must be able to share general files.
- Users must be able to share video files.
- The app should show file name, file type, file size, and transfer status where appropriate.
- Users should be able to open or download received files when supported by the device.
- Video file sharing must be treated as file sharing, not live video calling.

### PWA Installation

- The app must include a web app manifest when application development begins.
- The app must include a service worker for offline-first behavior when application development begins.
- The app should be installable on supported browsers and devices.
- The installed app should open to a useful starting screen.

### Role Permissions

Hosts can:

- Create rooms.
- End rooms they created.
- Remove participants from rooms they host.
- Regenerate join codes for rooms they host.
- Send messages, voice notes, images, files, and video files.
- Participate in live voice communication.

Participants can:

- Join rooms.
- Send messages.
- Send voice notes.
- Participate in live voice communication.
- Share images, files, and video files.
- Leave rooms.

## 8. Non-Functional Requirements

### Offline-First Behavior

- ZongoLink-V1 must be designed to work without internet access after the app has been loaded or installed.
- Communication must be limited to users connected through the same Wi-Fi network or mobile hotspot.
- Core local communication flows must not require cloud services.
- The app should handle connection interruptions gracefully.

### Usability

- The app must be designed for non-technical users.
- User-facing language must avoid IP addresses, ports, protocols, and technical networking terms.
- Primary actions should be clear and reachable on mobile screens.
- The app should provide friendly empty, loading, error, and retry states.

### Accessibility

- Interactive elements should have clear labels.
- Text should meet readable contrast standards.
- The app should support keyboard navigation where practical.
- Voice and media controls should be understandable without relying only on color.

### Platform Support

- The design must be mobile-first.
- The app must also support desktop browsers.
- Layouts must adapt to different screen sizes.
- The app should target common modern browsers that support required PWA, media, and communication APIs.

### Privacy and Security

- No user accounts are required.
- No IP addresses or technical connection details should be visible in the normal user interface.
- Users should only see simple room names, passcodes, QR codes, and participant names.
- Join codes should be random, room-scoped, and regenerable by the host.
- Shared data should remain local to participating devices in V1.

### Performance

- The app should load quickly on mobile devices.
- Messaging interactions should feel near real time on a stable local connection.
- File and video sharing should show progress for larger transfers.
- The interface should remain responsive during media transfers and voice activity.
- The app should avoid holding large media files in memory longer than necessary.

## 9. User Flows

### Create Room Flow

1. User opens ZongoLink-V1.
2. User chooses to create a room.
3. User enters or confirms a room name.
4. App creates the room.
5. User becomes the host.
6. App displays a passcode and QR code for participants.
7. Host shares the passcode or QR code with nearby users.

### Join by Passcode Flow

1. Participant opens ZongoLink-V1.
2. Participant chooses to join a room.
3. Participant enters the passcode.
4. App validates the passcode for a local room.
5. Participant joins the room.
6. Participant arrives in the room conversation.

### Join by QR Code Flow

1. Participant opens ZongoLink-V1.
2. Participant chooses to scan a QR code.
3. Participant scans the host's QR code.
4. App validates the QR code invite.
5. Participant joins the room.
6. Participant arrives in the room conversation.

### Send Text Message Flow

1. User opens a room.
2. User types a message.
3. User sends the message.
4. Message appears in the room conversation.
5. Other room members receive the message.

### Send Voice Note Flow

1. User opens a room.
2. User starts recording a voice note.
3. App requests microphone access if needed.
4. User stops recording.
5. User previews or sends the voice note.
6. Other room members receive the voice note.

### Join Live Voice Flow

1. User opens a room.
2. User taps the live voice control.
3. App requests microphone access if needed.
4. User joins the live voice session.
5. User can mute, unmute, or leave live voice at any time.

### Share Image, File, or Video File Flow

1. User opens a room.
2. User chooses an image, file, or video file.
3. App displays the selected item before sending when appropriate.
4. User sends the item.
5. App shows transfer progress.
6. Other room members receive the shared item.

### Host Ends Room Flow

1. Host opens the room controls.
2. Host chooses to end the room.
3. App asks for confirmation.
4. Host confirms the action.
5. Room closes for all participants.
6. New participants can no longer join the room.

### Host Removes Participant Flow

1. Host opens the participant list.
2. Host selects a participant.
3. Host chooses to remove the participant.
4. App asks for confirmation.
5. Participant is removed from the room.
6. Remaining room members see updated participant state where appropriate.

### Host Regenerates Join Code Flow

1. Host opens room invite settings.
2. Host chooses to regenerate the join code.
3. App asks for confirmation.
4. App creates a new passcode and QR code.
5. Previous join code stops working for new join attempts.

## 10. Success Metrics

- Users can create a room without technical help.
- Users can join a room by passcode in under one minute.
- Users can join a room by QR code in under one minute.
- Users can exchange text messages without internet access.
- Users can send, receive, and play voice notes.
- Users can join, mute, unmute, and leave live voice communication reliably.
- Users can share images, files, and video files on a local network.
- Hosts can end rooms, remove participants, and regenerate join codes.
- No user accounts are required for normal use.
- No cloud server is required for V1 core communication.
- No IP addresses or technical connection details appear in normal user flows.
- The app can be installed as a PWA on supported devices.

## 11. Risks

- Browser support for local peer discovery and direct communication may vary.
- WebRTC connection setup may require careful local, user-mediated design without cloud signaling servers.
- Some mobile browsers may limit background activity, microphone access, file handling, or local storage.
- QR scanning behavior may differ across devices and browsers.
- Live voice quality may vary depending on device performance and local network conditions.
- Large file or video transfers may affect performance, battery life, and storage usage.
- Users may misunderstand that all participants must be nearby and connected to the same Wi-Fi network or hotspot.
- PWA installation behavior differs across browsers and operating systems.
- Avoiding technical language may make some troubleshooting scenarios harder to explain.

## 12. Future ZongoLink-V2 Considerations

- Optional saved display names or lightweight local profiles.
- Improved local room discovery while preserving simple user-facing language.
- Stronger invite controls, trust indicators, and room safety features.
- Better room history, export, and local backup options.
- More advanced host moderation tools.
- Multi-language support.
- Accessibility enhancements based on real user testing.
- Improved transfer reliability for large files and video files.
- Organization-focused controls for schools, events, and community groups.
- Future V2 work should preserve the local-first scope and must not introduce user accounts, cloud databases, internet servers, or video conferencing.
