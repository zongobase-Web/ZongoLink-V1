# ZongoLink-V1 Roadmap

This roadmap breaks ZongoLink-V1 development into focused phases from planning through deployment. Each phase includes objectives, deliverables, dependencies, risks, and acceptance criteria.

## Phase 0: Planning

### Objectives

- Define the product vision, mission, and V1 scope.
- Document core features, user roles, and user flows.
- Confirm non-goals, including no user accounts, no cloud databases, no internet servers, no cloud signaling servers, and no video conferencing.
- Establish the initial architecture direction for a local-first PWA.

### Deliverables

- Product Requirements Document.
- Architecture document.
- Roadmap document.
- Initial repository structure.
- V1 scope and non-goals list.

### Dependencies

- Agreement on target users and primary use cases.
- Agreement that V1 communication is local-network only.
- Agreement on the initial technology stack.

### Risks

- Browser limitations may affect local device discovery and WebRTC setup.
- Scope may expand before local communication basics are validated.
- Offline-first expectations may need clearer user-facing explanation.

### Acceptance Criteria

- PRD is complete.
- Architecture document is complete.
- Roadmap is complete.
- V1 non-goals are explicit.
- No application source code is required for this phase.

## Phase 1: Project Setup

### Objectives

- Initialize the application project structure.
- Configure the frontend development toolchain.
- Establish coding, formatting, and linting conventions.
- Prepare the repository for feature implementation.

### Deliverables

- React project scaffolded with Vite.
- TypeScript configured.
- Tailwind CSS configured.
- Base application folders created.
- Development scripts documented.
- Linting and formatting configured.

### Dependencies

- Completion of Phase 0 planning documents.
- Node.js and package manager availability.
- Agreement on frontend stack: React, TypeScript, Vite, and Tailwind CSS.

### Risks

- Tooling choices may need adjustment as PWA and WebRTC requirements become clearer.
- Early structure may become too broad if features are scaffolded before requirements stabilize.
- Dependency configuration errors may slow initial development.

### Acceptance Criteria

- App runs locally in development mode.
- TypeScript checks pass.
- Tailwind CSS renders correctly.
- Basic scripts are available and documented.
- No feature implementation is required beyond the initial app shell setup.

## Phase 2: PWA Foundation

### Objectives

- Add installable PWA behavior.
- Implement offline-ready app shell caching.
- Establish update and offline status patterns.
- Prepare the app for mobile-first use.

### Deliverables

- Web App Manifest.
- Service Worker registration.
- App icons and metadata placeholders.
- Offline app shell behavior.
- Install prompt handling where supported.
- Offline and update status UI patterns.

### Dependencies

- Phase 1 project setup.
- App name and basic metadata.
- Initial app shell layout.

### Risks

- PWA installation behavior differs across browsers and operating systems.
- Service worker caching mistakes may cause stale app versions.
- Offline expectations may be confusing before communication features exist.

### Acceptance Criteria

- App can be installed on supported browsers.
- App shell loads after initial installation without internet.
- Service worker update behavior is predictable.
- Users receive clear offline and update status feedback.

## Phase 3: Room Creation and Joining

### Objectives

- Implement room creation.
- Make the room creator the room host.
- Support multiple rooms.
- Support joining by passcode and QR code.
- Keep all technical connection details hidden from users.

### Deliverables

- Create room flow.
- Room list or active room selector.
- Host room state.
- Passcode generation and entry flow.
- QR code generation and scanning flow.
- Join progress and error states.
- Initial participant state.

### Dependencies

- Phase 2 PWA foundation.
- Room data model.
- IndexedDB room persistence.
- QR code generation and scanning library selection.
- Local, user-mediated connection setup strategy.

### Risks

- Browser limitations may make local device discovery difficult.
- QR scanning support may vary by device.
- Passcodes must balance simplicity and basic access safety.
- WebRTC setup may require careful design without cloud signaling servers.

### Acceptance Criteria

- A user can create a room.
- The room creator becomes host.
- Multiple rooms can exist locally.
- A participant can start joining by passcode.
- A participant can start joining by QR code.
- No IP addresses, ports, protocols, or networking details are visible in normal user flows.

## Phase 4: Messaging

### Objectives

- Add real-time text messaging inside rooms.
- Persist message history locally.
- Show message delivery and retry states.
- Keep messaging simple and mobile-friendly.

### Deliverables

- Message composer.
- Message list.
- WebRTC Data Channel message events.
- IndexedDB message storage.
- Delivery acknowledgement handling.
- Retry state for failed sends.
- Friendly empty and error states.

### Dependencies

- Phase 3 room creation and joining.
- Participant identity model.
- Active room state.
- WebRTC Data Channel connection layer.
- IndexedDB message stores.

### Risks

- Message ordering may vary during reconnection or retries.
- Duplicate delivery may occur if messages are resent.
- Connection interruptions may confuse users without clear status.

### Acceptance Criteria

- Users can send and receive text messages in a room.
- Messages are stored locally.
- Duplicate message events are ignored.
- Failed sends can be retried.
- Message states are understandable to non-technical users.

## Phase 5: Voice Notes

### Objectives

- Allow users to record voice notes.
- Send voice notes inside rooms.
- Store and play received voice notes locally.
- Handle microphone permissions clearly.

### Deliverables

- Voice note recorder.
- Recording timer and controls.
- Voice note preview before sending.
- Voice note transfer over WebRTC Data Channels.
- Voice note playback in message history.
- IndexedDB storage for voice note metadata and blobs.
- Permission and error states.

### Dependencies

- Phase 4 messaging.
- Attachment metadata model.
- Blob storage strategy.
- Microphone access support.
- Chunked transfer strategy.

### Risks

- Microphone permission behavior differs by browser.
- Long recordings may increase memory and storage usage.
- Audio encoding support may vary across devices.
- Failed transfers may require clear retry behavior.

### Acceptance Criteria

- Users can record voice notes.
- Users can preview or send voice notes.
- Recipients can receive and play voice notes.
- Voice notes are associated with room messages.
- Permission errors provide simple recovery guidance.

## Phase 6: Live Voice Communication

### Objectives

- Add live audio-only room communication.
- Support joining and leaving live voice without leaving the room.
- Support mute and unmute controls.
- Keep voice participation state visible and simple.

### Deliverables

- Live voice join and leave controls.
- Mute and unmute controls.
- WebRTC Audio Stream handling.
- Voice participant status.
- Microphone permission handling.
- Cleanup of audio tracks when leaving voice.

### Dependencies

- Phase 3 room and participant model.
- WebRTC peer connection layer.
- Microphone access support.
- UI patterns from Phase 5 voice notes.

### Risks

- Audio quality may vary by device and local network conditions.
- Multiple participants may increase connection complexity.
- Background browser behavior may interrupt live audio.
- Poor cleanup could leave microphones active longer than expected.

### Acceptance Criteria

- Users can join live audio in a room.
- Users can mute and unmute themselves.
- Users can leave live voice without leaving the room.
- Audio resources are released after leaving voice.
- Live voice does not introduce video conferencing.

## Phase 7: File and Media Sharing

### Objectives

- Support image sharing.
- Support general file sharing.
- Support video file sharing as file transfer only.
- Provide transfer progress, preview, failure, and retry states.
- Keep media transfer efficient on mobile devices.

### Deliverables

- Attachment picker.
- Image preview before sending.
- File and video metadata display.
- Chunked file transfer over WebRTC Data Channels.
- Transfer progress UI.
- Transfer cancellation and retry behavior.
- IndexedDB storage for attachment metadata and blobs.

### Dependencies

- Phase 4 messaging.
- Attachment metadata model.
- Chunked transfer architecture.
- IndexedDB attachment and blob stores.
- File input support across target browsers.

### Risks

- Large files may strain memory, storage, and battery.
- Video files may transfer slowly on weaker devices.
- Storage limits may vary by browser and device.
- File type handling may differ across platforms.

### Acceptance Criteria

- Users can share images.
- Users can share general files.
- Users can share video files as files.
- Recipients can receive and open supported attachments.
- Transfer progress is visible.
- Large transfer failures are handled gracefully.

## Phase 8: Host Controls

### Objectives

- Add room management controls for hosts.
- Support ending rooms.
- Support removing participants.
- Support regenerating join codes.
- Keep host controls clear and safe.

### Deliverables

- Host-only room controls.
- End room flow.
- Remove participant flow.
- Regenerate join code flow.
- Room event notifications.
- Participant status updates.
- Confirmation states for destructive actions.

### Dependencies

- Phase 3 room management.
- Phase 4 messaging and room events.
- Participant identity model.
- Join code architecture.
- Host permission model.

### Risks

- Host permissions may be applied inconsistently.
- Removed participants may retain stale local state.
- Regenerating join codes must not unintentionally disconnect current participants unless designed to do so.
- Destructive actions may confuse users without confirmation.

### Acceptance Criteria

- Only hosts can access host controls.
- Hosts can end rooms.
- Hosts can remove participants.
- Hosts can regenerate join codes.
- Participants receive clear room status updates.
- Old join codes stop working after regeneration.

## Phase 9: Testing

### Objectives

- Validate core user flows.
- Test offline-first behavior.
- Test local communication across common devices and browsers.
- Verify accessibility, usability, and mobile responsiveness.

### Deliverables

- Unit tests for domain logic.
- Component tests for key UI states.
- Integration tests for room and messaging flows where practical.
- Manual testing checklist for PWA install and offline behavior.
- Cross-browser testing notes.
- Device testing notes.
- Accessibility review.

### Dependencies

- Phases 1 through 8 substantially complete.
- Test device availability.
- Defined acceptance criteria for core flows.

### Risks

- Local real-time communication may be difficult to automate fully.
- Device and browser differences may reveal late issues.
- PWA install behavior may need manual verification.
- Testing without internet must be intentionally planned.

### Acceptance Criteria

- Core automated tests pass where practical.
- Manual testing confirms room creation, joining, messaging, voice notes, live voice, and file sharing.
- PWA app shell works offline after initial load or installation.
- No visible networking terminology appears in normal user flows.
- Major mobile and desktop layouts are verified.

## Phase 10: Deployment

### Objectives

- Prepare ZongoLink-V1 for release.
- Build production assets.
- Publish deployment documentation.
- Provide setup and usage instructions for early users.

### Deliverables

- Production build.
- Deployment configuration.
- Release checklist.
- User-facing setup instructions.
- Updated README.
- Known limitations document.
- Versioned release notes.

### Dependencies

- Phase 9 testing complete.
- Hosting target selected for distributing the app shell.
- Final app metadata and icons.
- License decision or explicit placeholder.

### Risks

- Deployment hosting may affect service worker scope or PWA behavior.
- Users may expect remote internet communication if limitations are unclear.
- Browser updates can change PWA install behavior.
- The app must remain clear that core communication is local-network only.

### Acceptance Criteria

- Production build completes successfully.
- Deployed app shell loads correctly.
- PWA install behavior works on supported browsers.
- Offline app shell behavior works after initial load or installation.
- Documentation explains V1 local-only capabilities and limitations clearly.
- Release is tagged or otherwise versioned for tracking.
