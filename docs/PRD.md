# Product Requirements Document: ZongoLink-V1

## 1. Vision

ZongoLink-V1 is an offline-first Progressive Web App (PWA) that helps people communicate locally when internet access is unavailable, unreliable, or intentionally avoided.

The product enables users on the same Wi-Fi network or mobile hotspot to create and join simple communication rooms without exposing technical details such as IP addresses or networking terminology. The experience should feel familiar, mobile-friendly, and approachable for non-technical users.

## 2. Product Goals

- Enable local communication without internet access.
- Provide a simple room-based experience for groups.
- Allow users to join rooms using a passcode or QR code.
- Support text, voice notes, live voice communication, images, files, and video file sharing.
- Make the app installable as a PWA on supported devices.
- Keep all visible language user-friendly and free of networking terminology.
- Design primarily for mobile users while supporting desktop screens.

## 3. Non-goals

- Live video calls.
- User accounts or authentication profiles.
- Cloud servers.
- Internet-based communication between remote locations.
- Screen sharing.
- AI features.
- Exposing IP addresses or technical connection details to users.

## 4. User Personas

### Family Host

A parent or family member who creates a room so nearby relatives can communicate during travel, at home, or in areas with weak internet coverage.

### School Coordinator

A teacher, administrator, or group leader who needs a simple way for students or staff to communicate on the same local network without requiring accounts.

### Community Organizer

A local organizer who coordinates people in a neighborhood, community center, or temporary gathering where internet access may be unavailable.

### Small Business Team Member

A staff member who needs lightweight communication between nearby coworkers using a shared hotspot or local Wi-Fi network.

### Event Participant

An attendee or volunteer who joins a temporary room using a QR code or passcode to receive updates and share information.

## 5. User Stories

### Host Stories

- As a host, I want to create a room so that nearby people can communicate together.
- As a host, I want to end a room so that the conversation closes when it is no longer needed.
- As a host, I want to remove a participant so that I can manage access to the room.
- As a host, I want to regenerate a join code so that previous access details no longer work.
- As a host, I want to share a QR code or passcode so that participants can join without technical setup.

### Participant Stories

- As a participant, I want to join a room by passcode so that I can connect quickly.
- As a participant, I want to join a room by scanning a QR code so that I do not have to type.
- As a participant, I want to send text messages so that I can communicate with the group.
- As a participant, I want to send voice notes so that I can share spoken messages.
- As a participant, I want to join live voice communication so that I can talk in real time.
- As a participant, I want to share images, files, and video files so that I can exchange useful information.
- As a participant, I want the app to work without internet so that I can use it in limited-connectivity situations.

## 6. Functional Requirements

### Room Management

- Users must be able to create a room.
- The app must support multiple rooms.
- Each room must have a user-friendly room name or label.
- Hosts must be able to end a room.
- Hosts must be able to remove a participant from a room.
- Hosts must be able to regenerate the room join code.

### Room Joining

- Participants must be able to join a room using a passcode.
- Participants must be able to join a room using a QR code.
- Join screens must not expose IP addresses or networking terminology.
- Join errors must use plain language and suggest clear next steps.

### Messaging

- Users must be able to send and receive text messages within a room.
- Messages should display sender identity, timestamp, and delivery state where appropriate.
- The interface should clearly show the active room.

### Voice Notes

- Users must be able to record and send voice notes.
- Users must be able to play received voice notes.
- The app should show recording, sending, and playback states clearly.

### Live Voice Communication

- Users must be able to join live voice communication inside a room.
- Users must be able to mute and unmute themselves.
- Users must be able to leave live voice communication without leaving the room.
- The interface must make active voice participation obvious.

### Media and File Sharing

- Users must be able to share images.
- Users must be able to share general files.
- Users must be able to share video files.
- The app should show file name, file type, size, and transfer status where appropriate.
- Users must be able to open or download received files when supported by the device.

### PWA Installation

- The app must include a web app manifest.
- The app must include a service worker for offline-first behavior.
- The app should provide an installable experience on supported browsers and devices.
- The installed app should open to a useful starting screen.

## 7. Non-functional Requirements

### Usability

- The app must be designed for non-technical users.
- User-facing language must avoid IP addresses, ports, protocols, and networking terminology.
- The core experience must be simple, direct, and easy to understand.
- Primary actions should be clear and reachable on mobile screens.

### Accessibility

- Interactive elements should have clear labels.
- Text should meet readable contrast standards.
- The app should support keyboard navigation where practical.
- Voice and media controls should be understandable without relying only on color.

### Offline-first Behavior

- The app must work without internet after it has been loaded or installed.
- Core room, messaging, and sharing experiences should be designed for local use.
- The app should handle connection interruptions gracefully.

### Platform Support

- The design must be mobile-first.
- The app must support desktop browsers.
- The layout must adapt to different screen sizes.
- The app should work on common modern browsers that support required PWA and communication APIs.

### Privacy and Security

- No IP addresses should be shown in the user interface.
- Users should only see simple room names, passcodes, QR codes, and participant names.
- Join codes should be regenerable by the host.
- Local communication should avoid cloud routing in V1.

### Performance

- The app should load quickly on mobile devices.
- Messaging interactions should feel near real time on a stable local connection.
- File sharing should show progress for larger transfers.
- The interface should remain responsive during transfers and voice activity.

## 8. User Flows

### Create Room Flow

1. User opens ZongoLink-V1.
2. User chooses to create a room.
3. User enters or confirms a room name.
4. App creates the room.
5. App displays a passcode and QR code for participants.
6. Host shares the passcode or QR code with nearby users.

### Join by Passcode Flow

1. Participant opens ZongoLink-V1.
2. Participant chooses to join a room.
3. Participant enters the passcode.
4. App connects the participant to the matching room.
5. Participant arrives in the room conversation.

### Join by QR Code Flow

1. Participant opens ZongoLink-V1.
2. Participant chooses to scan a QR code.
3. Participant scans the host's QR code.
4. App connects the participant to the room.
5. Participant arrives in the room conversation.

### Send Message Flow

1. User opens a room.
2. User types a message.
3. User sends the message.
4. Message appears in the room conversation.
5. Other room members receive the message.

### Send Voice Note Flow

1. User opens a room.
2. User starts recording a voice note.
3. User stops recording.
4. User reviews or sends the voice note.
5. Other room members receive the voice note.

### Join Live Voice Flow

1. User opens a room.
2. User taps the live voice control.
3. App requests microphone access if needed.
4. User joins the live voice session.
5. User can mute, unmute, or leave live voice at any time.

### Share File Flow

1. User opens a room.
2. User chooses an image, file, or video file.
3. App displays the selected item before sending when appropriate.
4. User sends the item.
5. App shows transfer progress.
6. Other room members receive the shared item.

## 9. Success Metrics

- Users can create and join a room without technical help.
- Users can join by passcode or QR code in under one minute.
- Users can exchange text messages without internet access.
- Users can successfully send and receive voice notes.
- Users can join and leave live voice communication reliably.
- Users can share images, files, and video files on a local network.
- Users do not encounter visible IP addresses or networking terminology during normal use.
- The app can be installed as a PWA on supported devices.
- Mobile users can complete core flows comfortably on small screens.

## 10. Risks

- Browser support for local peer discovery and communication may vary.
- Some mobile browsers may limit background activity, local communication, or file handling.
- QR scanning behavior may differ across devices.
- Live voice quality may vary depending on device performance and local network conditions.
- Large file or video transfers may affect performance.
- Users may misunderstand that participants need to be on the same Wi-Fi network or hotspot if the app avoids technical terms too aggressively.
- PWA installation prompts differ by browser and operating system.

## 11. Future V2 Considerations

- Optional user profiles or saved display names.
- Improved room history and local backups.
- Moderation tools beyond participant removal.
- Better room discovery that still avoids technical language.
- Multi-language support.
- Stronger encryption and trust indicators.
- Admin controls for schools, events, or organizations.
- Cross-network communication through an optional relay service.
- Live video calls if the product scope expands.
- Screen sharing if needed for education or business use cases.
