# ZongoLink-V1 Roadmap

This roadmap breaks ZongoLink-V1 development into focused phases from planning through deployment. Each phase includes objectives, deliverables, dependencies, risks, and acceptance criteria.

## Phase 0: Planning

### Objectives

- Define the product vision, target users, and core user journeys.
- Confirm V1 scope and out-of-scope features.
- Document key technical assumptions and constraints.
- Align the roadmap with the product requirements and architecture.

### Deliverables

- Product requirements document.
- Architecture document.
- Initial roadmap.
- Feature scope for V1.
- Out-of-scope list for V1.

### Dependencies

- Agreement on target users and primary use cases.
- Clear definition of offline-first expectations.
- Initial decisions on communication, storage, and PWA strategy.

### Risks

- Browser limitations may affect local device discovery.
- Scope may expand before the core communication experience is validated.
- Non-technical user requirements may conflict with complex networking realities.

### Acceptance Criteria

- V1 scope is documented.
- Non-goals are clearly listed.
- Core phases are defined.
- Technical architecture is documented at a planning level.

## Phase 1: Project Setup

### Objectives

- Initialize the frontend application.
- Configure the development toolchain.
- Establish project structure and coding standards.
- Prepare the app for feature development.

### Deliverables

- React application scaffolded with Vite.
- TypeScript configured.
- Tailwind CSS configured.
- Base folder structure created.
- Linting and formatting tools configured.
- Basic development scripts documented.

### Dependencies

- Phase 0 planning documents.
- Node.js and package manager availability.
- Agreement on frontend stack.

### Risks

- Tooling decisions may need adjustment as PWA and WebRTC requirements become clearer.
- Inconsistent project structure could slow feature work.

### Acceptance Criteria

- The app runs locally in development mode.
- TypeScript builds without errors.
- Tailwind CSS styles render correctly.
- Project scripts are documented.
- Repository structure supports planned feature areas.

## Phase 2: PWA Foundation

### Objectives

- Add installable PWA behavior.
- Implement offline-first app shell caching.
- Prepare the app for mobile-first usage.
- Establish update and offline status patterns.

### Deliverables

- Web app manifest.
- Service worker registration.
- App icons and metadata.
- Offline app shell behavior.
- Basic install prompt handling.
- Offline status indicator.

### Dependencies

- Phase 1 project setup.
- Finalized app name, icons, and basic branding.
- Initial app shell layout.

### Risks

- PWA install behavior varies across browsers and operating systems.
- Service worker caching errors can cause stale app versions.
- Offline expectations may be misunderstood if communication features are not ready yet.

### Acceptance Criteria

- The app can be installed on supported devices.
- The app shell loads after initial installation without internet.
- Service worker update behavior is predictable.
- Users receive simple offline and update status feedback.

## Phase 3: Room Creation and Joining

### Objectives

- Implement room creation.
- Support multiple rooms.
- Allow participants to join by passcode.
- Allow participants to join by QR code.
- Hide all technical connection details from users.

### Deliverables

- Create room flow.
- Room list or active room selector.
- Passcode generation and entry flow.
- QR code generation for hosts.
- QR code scanning for participants.
- Join progress and error states.
- Initial room membership state.

### Dependencies

- Phase 2 PWA foundation.
- Room data model.
- IndexedDB setup for local room metadata.
- QR code library selection.
- Initial communication signaling strategy.

### Risks

- Browser constraints may complicate local discovery and signaling.
- QR scanner support may vary by device.
- Join codes must be simple for users but strong enough for basic room access.

### Acceptance Criteria

- A host can create a room.
- Multiple rooms can exist locally.
- A participant can start joining with a passcode.
- A participant can start joining with a QR code.
- No IP addresses or networking terminology are visible in the user interface.
- Room and join states are persisted locally where appropriate.

## Phase 4: Messaging

### Objectives

- Add real-time text messaging within rooms.
- Persist message history locally.
- Show clear message delivery states.
- Handle interrupted or failed sends gracefully.

### Deliverables

- Message composer.
- Message list.
- WebRTC Data Channel message transport.
- Local message persistence in IndexedDB.
- Delivery acknowledgement handling.
- Retry state for failed messages.
- Friendly empty and error states.

### Dependencies

- Phase 3 room creation and joining.
- WebRTC Data Channel connection layer.
- IndexedDB message stores.
- Participant identity model.

### Risks

- Message ordering may vary across peer connections.
- Duplicate message delivery may occur during retries.
- Connection interruptions may confuse users without clear status feedback.

### Acceptance Criteria

- Users can send and receive text messages in a room.
- Messages are stored locally.
- Duplicate message events are ignored.
- Failed sends can be retried.
- Message status is understandable to non-technical users.

## Phase 5: Voice Notes

### Objectives

- Allow users to record short voice notes.
- Send voice notes within a room.
- Store and play received voice notes locally.
- Handle microphone permissions clearly.

### Deliverables

- Voice note recorder.
- Recording timer and controls.
- Voice note preview before sending.
- Voice note transfer over Data Channels.
- Voice note playback in message history.
- Local voice note storage in IndexedDB.
- Permission and error states.

### Dependencies

- Phase 4 messaging.
- File/blob storage model.
- Microphone access support.
- Chunked transfer strategy for audio blobs.

### Risks

- Microphone permissions differ by browser.
- Long recordings may increase memory and storage usage.
- Audio encoding support may vary across devices.

### Acceptance Criteria

- Users can record, send, receive, and play voice notes.
- Voice notes are associated with room messages.
- Recording and playback states are clear.
- Microphone permission errors provide simple recovery guidance.

## Phase 6: Live Voice Communication

### Objectives

- Add live room voice communication.
- Support joining and leaving voice without leaving the room.
- Support mute and unmute controls.
- Keep voice status visible and simple.

### Deliverables

- Live voice join and leave controls.
- Mute and unmute controls.
- WebRTC Audio Stream handling.
- Voice participant status.
- Speaker or activity indicators where practical.
- Microphone permission handling.
- Cleanup of audio tracks when leaving voice.

### Dependencies

- Phase 3 room and participant model.
- WebRTC peer connection layer.
- Microphone access.
- UI patterns from Phase 5 voice notes.

### Risks

- Audio quality may vary by device and local connection.
- Multiple participants may increase connection complexity.
- Background browser behavior may interrupt live audio.
- Poor cleanup could leave microphones active longer than expected.

### Acceptance Criteria

- Users can join live voice in a room.
- Users can mute, unmute, and leave live voice.
- Room membership remains active after leaving voice.
- Audio resources are released when no longer needed.
- Permission failures use simple user-facing language.

## Phase 7: Media and File Sharing

### Objectives

- Support image sharing.
- Support general file sharing.
- Support video file sharing.
- Provide progress, preview, and retry states.
- Keep transfers efficient on mobile devices.

### Deliverables

- Attachment picker.
- Image preview before sending.
- File metadata display.
- Video file metadata display.
- Chunked file transfer over Data Channels.
- Transfer progress UI.
- Transfer cancellation and retry behavior.
- Local attachment storage in IndexedDB.

### Dependencies

- Phase 4 messaging.
- Chunked transfer architecture.
- IndexedDB attachment and blob stores.
- File input support across target browsers.

### Risks

- Large files may strain memory, storage, or battery.
- Video files may transfer slowly on weaker devices.
- Storage limits may vary by browser and device.
- File type handling may differ across platforms.

### Acceptance Criteria

- Users can share images, files, and video files.
- Recipients can receive and open supported attachments.
- Transfer progress is visible.
- Large transfer failures are handled gracefully.
- Attachments are stored separately from message metadata.

## Phase 8: Host Controls

### Objectives

- Add room management controls for hosts.
- Support ending rooms.
- Support removing participants.
- Support regenerating join codes.
- Keep controls understandable and safe.

### Deliverables

- Host-only room controls.
- End room flow.
- Remove participant flow.
- Regenerate join code flow.
- Room event notifications.
- Participant status updates.
- Guardrails for destructive host actions.

### Dependencies

- Phase 3 room management.
- Phase 4 messaging and room event delivery.
- Participant identity and permission model.
- Join code architecture.

### Risks

- Host and participant permissions may be applied inconsistently.
- Removed participants may have stale local room state.
- Regenerating join codes must not disconnect current valid participants unless intended.

### Acceptance Criteria

- Only hosts can access host controls.
- Hosts can end rooms.
- Hosts can remove participants.
- Hosts can regenerate join codes.
- Participants receive clear room status updates.
- Removed or expired access cannot rejoin with the old code.

## Phase 9: Testing

### Objectives

- Validate core user flows.
- Test offline-first behavior.
- Test real-time communication across common devices and browsers.
- Verify accessibility, usability, and mobile responsiveness.

### Deliverables

- Unit tests for domain logic.
- Component tests for key UI states.
- Integration tests for room and messaging flows.
- Manual test checklist for PWA install and offline use.
- Cross-browser testing notes.
- Device testing notes for mobile and desktop.
- Accessibility review.

### Dependencies

- Phases 1 through 8 substantially complete.
- Test device availability.
- Defined acceptance criteria for core flows.

### Risks

- Real-time local communication can be difficult to automate fully.
- Device and browser differences may reveal late issues.
- PWA install behavior may need manual verification.

### Acceptance Criteria

- Core flows pass automated tests where practical.
- Manual testing confirms create room, join room, messaging, voice notes, live voice, and file sharing.
- The app works after installation without internet for supported offline features.
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
- Hosting target selected.
- Final app metadata and icons.
- License decision or explicit placeholder.

### Risks

- Deployment hosting may affect service worker scope or PWA behavior.
- Users may expect internet-based communication if limitations are unclear.
- Browser updates can change PWA install behavior.

### Acceptance Criteria

- Production build completes successfully.
- The deployed app loads correctly.
- PWA install behavior works on supported browsers.
- Offline app shell behavior works after initial load or installation.
- Documentation explains V1 capabilities and limitations clearly.
- Release is tagged or otherwise versioned for tracking.
