# Akruti Studio: Client Portal Architecture & Workflow

The **Studio Portal** is designed to bridge the gap between Akruti's internal production and the client's need for transparency. It serves as a secure, high-end dashboard for project tracking and asset management.

---

## 1. The Access & Authentication Process

### Phase A: Studio Initialization (The Backend)
1.  **Project Creation:** An admin at Akruti creates a new project entry in the database (e.g., MongoDB or PostgreSQL).
2.  **Access Generation:** The system generates a unique, cryptographically secure **Access Key** (e.g., `AK-9X2-P01`).
3.  **Hashed Storage:** The key is never stored in plain text. It is hashed (using `bcrypt` or `argon2`) before being saved to the database, associated with the client's email and project ID.

### Phase B: Client Invitation
1.  **Automated Email:** The backend triggers an email to the client containing:
    *   A direct link to the portal (`akruticreations.com/portal`).
    *   The plain-text Access Key.
2.  **Security Protocol:** For high-security projects, we can implement **Magic Links** (expiring in 24 hours) or **Multi-Factor Authentication (MFA)** via SMS.

### Phase C: Login & Session Management
1.  **Submission:** The client enters their email and the Access Key into the portal.
2.  **Validation:** The backend compares the provided key against the stored hash.
3.  **JWT Issuance:** Upon success, the server issues a **JSON Web Token (JWT)** stored in an `HttpOnly` cookie. This token contains the client's permissions and session expiry, allowing them to remain logged in safely.

---

## 2. Real-Time Production Updates

To keep the dashboard "live," the following process is used:

1.  **The Trigger:** When a production milestone is reached (e.g., *Fabrication Complete*), the studio team updates the status in the internal Admin Panel.
2.  **The State Change:**
    *   **REST/GraphQL:** The frontend polls for changes or refreshes on mount.
    *   **WebSockets (Optimized):** Using `Socket.io`, the backend pushes a "StatusUpdate" event to the client's browser, and the progress bar animates in real-time without a page refresh.
3.  **Asset Uploads:** When the studio uploads a "Proof" (PDF or Image), it is stored in a secure bucket (AWS S3 or Google Cloud Storage) with a **Signed URL** that is only valid for the authenticated client.

---

## 3. Feedback Loop & Approval

1.  **Proofing:** The client views a design proof on the dashboard.
2.  **Action:** They can click "Approve" or "Request Changes."
3.  **Notification:** The studio team receives an instant Slack/Email notification with the client's feedback, closing the loop faster than traditional email chains.

---

## 4. UI/UX Design Principles
*   **Minimalism:** No clutter. Only essential status data and files.
*   **Brand Colors:** Strict adherence to **Yellow, Black, and White** to maintain a professional "Studio" feel.
*   **Tactile Feedback:** Smooth animations for progress bars and file downloads to reflect Akruti's high-end craftsmanship.
