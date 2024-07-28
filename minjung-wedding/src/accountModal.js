import React from "react";
import "./accountModal.scss";
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const AccountModal = (props) => {
  const closeAccountModal = () => {
    if (props.closeAccountModal) props.closeAccountModal();
  };
  return (
    props.visible && (
      <div className="accountModal">
        <div className="accountModal-inner">
          <div className="accountModal-inner-inner">
            <div className="accountModal-inner-box">
            {props.index === 0 && <div className="accountModal-inner-box">
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신랑 계좌</div>
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="068120823448" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>부산은행(예금주: 이주홍)</div>
                  <div>068120823448</div>
                </div>
              </div>
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신랑 혼주</div>
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="94810101092334" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>국민은행(예금주: 이길영)</div>
                  <div>94810101092334</div>
                </div>
              </div>
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신랑 혼주</div>
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="273120320273" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>부산은행(예금주: 임미숙)</div>
                  <div>273120320273</div>
                </div>
              </div>
            </div>}
            {props.index === 1 && <div className="accountModal-inner-box">
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신부 계좌</div>
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="02480104459984" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>국민은행(예금주: 조민정)</div>
                  <div>02480104459984</div>
                </div>
              </div>
            </div>}
            <div className="accountModal-inner-button" onClick={closeAccountModal}>
              닫기
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  );
};

export default AccountModal;
