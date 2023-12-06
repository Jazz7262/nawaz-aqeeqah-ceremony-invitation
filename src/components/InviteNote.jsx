import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
  return (
    <section id="invite-note">
      <div className="invite-note-wrapper">
        <h5>An Invitation from:</h5>
        <h2>Mr. & Mrs. T. Ghouse Moinuddin</h2>

        {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
        <h5 className="address mb-3">
          Residence: Near Mohammadia Masjid,
          <br /> Shroff Bazaar, Adoni,
          <br /> Kurnool Dist.,
          <br /> AP - 518 301.
        </h5>
        <p className="address">
          Contact: <br />
          +91 77955 35784.
        </p>
      </div>
    </section>
  );
}

export default InviteNote;
