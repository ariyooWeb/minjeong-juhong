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
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="44310101092727" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>국민(예금주: 최효철)</div>
                  <div>44310101092727</div>
                </div>
              </div>
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신랑 혼주</div>
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="671210298540" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>경남은행(예금주: 최연수)</div>
                  <div>671210298540</div>
                </div>
              </div>
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신랑 혼주</div>
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="40712348308" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>농협(예금주: 문순남)</div>
                  <div>40712348308</div>
                </div>
              </div>
            </div>}
            {props.index === 1 && <div className="accountModal-inner-box">
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신부 계좌</div>
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="01057617473207" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>하나(예금주: 유아름)</div>
                  <div>01057617473207</div>
                </div>
              </div>
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신부 혼주</div>
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="110008487309" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>신한(예금주: 유봉인)</div>
                  <div>110008487309</div>
                </div>
              </div>
              <div>
                <div className="accountModal-inner-box-header">
                  <div>신부 혼주</div>
                  <CopyToClipboard className="accountModal-inner-box-header-copy" text="11002173002011" onCopy={()=>alert("복사 완료")}>
                <text>복사</text></CopyToClipboard>
                </div>
                <div className="accountModal-inner-box-body">
                  <div>기업(예금주: 정규옥)</div>
                  <div>11002173002011</div>
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
