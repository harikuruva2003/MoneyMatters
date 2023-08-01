import "./ProfilePageForm.css";

export function ProfilePageForm() {
  return (
    <div className="page">
      <div className="profilePageForm">
        <div className="profilePicAndForm">
          <div>
            <img src="/images/favIcon.png" alt="" width={120} />
          </div>
          <div>
            <form>
              <div className="twoInputsDiv">
                <div className="inputDiv">
                  <span className="spanElement">Your Name</span>
                  <input type="text" placeholder="K Hari" />
                </div>
                <div className="inputDiv">
                  <span className="spanElement">User Name</span>
                  <input type="text" placeholder="Hari" />
                </div>
              </div>
              <div className="twoInputsDiv">
                <div className="inputDiv">
                  <span className="spanElement">Email</span>
                  <input type="text" placeholder="harikuruva2003@gmail.com" />
                </div>
                <div className="inputDiv">
                  <span className="spanElement">Password</span>
                  <input type="password" placeholder="*********" />
                </div>
              </div>
              <div className="twoInputsDiv">
                <div className="inputDiv">
                  <span className="spanElement">Date of Birth</span>
                  <input type="date" placeholder="name" />
                </div>
                <div className="inputDiv">
                  <span className="spanElement">Present Address</span>
                  <input type="text" placeholder="Present Address" />
                </div>
              </div>
              <div className="twoInputsDiv">
                <div className="inputDiv">
                  <span className="spanElement">Permanent Address</span>
                  <input type="text" placeholder="Permanent Address" />
                </div>
                <div className="inputDiv">
                  <span className="spanElement">City</span>
                  <input type="text" placeholder="Gadwal" />
                </div>
              </div>
              <div className="twoInputsDiv">
                <div className="inputDiv">
                  <span className="spanElement">Postal Code</span>
                  <input type="text" placeholder="123456" />
                </div>
                <div className="inputDiv">
                  <span className="spanElement">Country</span>
                  <input type="text" placeholder="India" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
