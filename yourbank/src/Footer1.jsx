import React from "react";
import logo from './assets/Logo.png'
import mail from './assets/mail.png'
import call from './assets/call.png'
import locetion from './assets/locetion.png'
import fecabook from './assets/fecabook.png'
import tewiter from './assets/tewiter.png'
import linkdin from './assets/linkdin.png'
function Footer1() {
  return (
    <div>
      <div
        style={{
          width: 1440,
          height: 350,
          paddingTop: 60,
          paddingBottom: 30,
          paddingLeft: 80,
          paddingRight: 80,
          background: "#1C1C1C",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 40,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 98,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 40,
            display: "flex",
          }}
        >
          <div style={{ width: 132.46, height: 34, position: "relative" }}>
            <div
              style={{
                width: 34,
                height: 34,
                left: 0,
                top: -0.43,
                position: "absolute",
              }}
            >
        <img src={logo} alt="" />
            </div>
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 14,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#E4E4E7",
                fontSize: 16,
                fontFamily: "Lexend",
                fontWeight: "400",
                // lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              Home
            </div>
            <div
              style={{
                color: "#E4E4E7",
                fontSize: 16,
                fontFamily: "Lexend",
                fontWeight: "400",
                // lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              Careers
            </div>
            <div
              style={{
                color: "#E4E4E7",
                fontSize: 16,
                fontFamily: "Lexend",
                fontWeight: "400",
                // lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              About
            </div>
            <div
              style={{
                color: "#E4E4E7",
                fontSize: 16,
                fontFamily: "Lexend",
                fontWeight: "400",
                // lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              Security
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 0,
            border: "1px #262626 solid",
          }}
        ></div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              borderRadius: 6,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 6,
              display: "flex",
            }}
          >
            <div style={{ width: 20, height: 20, position: "relative" }}>
              <div
                style={{
                  width: 17.5,
                  height: 13.75,
                  left: 1.25,
                  top: 3.12,
                  position: "absolute",
                //   background: "#CAFF33",
                }}
              ><img src={mail} alt="" /></div>
            </div>
            <div
              style={{
                color: "#E4E4E7",
                fontSize: 16,
                fontFamily: "Lexend",
                fontWeight: "400",
                // lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              hello@skillbirdge.com
            </div>
          </div>
          <div
            style={{
              borderRadius: 6,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 6,
              display: "flex",
            }}
          >
            <div style={{ width: 20, height: 20, position: "relative" }}>
              <div
                style={{
                  width: 17.5,
                  height: 17.5,
                  left: 1.25,
                  top: 1.25,
                  position: "absolute",
                //   background: "#CAFF33",
                }}
              ><img src={call} alt="" /></div>
            </div>
            <div
              style={{
                color: "#E4E4E7",
                fontSize: 16,
                fontFamily: "Lexend",
                fontWeight: "400",
                // lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              +91 91813 23 2309
            </div>
          </div>
          <div
            style={{
              borderRadius: 6,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 6,
              display: "flex",
            }}
          >
            <div style={{ width: 20, height: 20, position: "relative" }}>
              <div
                style={{
                  width: 13.75,
                  height: 16.87,
                  left: 3.12,
                  top: 1.88,
                  position: "absolute",
                //   background: "#CAFF33",
                }}
              ><img src={locetion} alt="" /></div>
            </div>
            <div
              style={{
                color: "#E4E4E7",
                fontSize: 16,
                fontFamily: "Lexend",
                fontWeight: "400",
                // lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              Somewhere in the World
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 0,
            border: "1px #262626 solid",
          }}
        ></div>
        <div
          style={{
            alignSelf: "stretch",
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 12,
            paddingRight: 24,
            background: "#1A1A1A",
            borderRadius: 100,
            border: "1px #262626 solid",
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                padding: 12,
                background: "#CAFF33",
                borderRadius: 100,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div style={{ width: 20, height: 20, position: "relative" }}>
                <div
                  style={{
                    width: 20,
                    height: 19.88,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    // background: "#262626",
                  }}
                ><img src={fecabook} alt="" /></div>
              </div>
            </div>
            <div
              style={{
                padding: 12,
                background: "#CAFF33",
                borderRadius: 100,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div style={{ width: 20, height: 20, position: "relative" }}>
                <div
                  style={{
                    width: 20,
                    height: 16.25,
                    left: 0,
                    top: 1.87,
                    position: "absolute",
                    // background: "#262626",
                  }}
                ><img src={tewiter} alt="" /></div>
              </div>
            </div>
            <div
              style={{
                padding: 12,
                background: "#CAFF33",
                borderRadius: 100,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div style={{ width: 20, height: 20, position: "relative" }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    // background: "#262626",
                  }}
                ><img src={linkdin} alt="" /></div>
              </div>
            </div>
          </div>
          <div
            style={{
              color: "#B3B3B3",
              fontSize: 14,
              fontFamily: "Lexend",
              fontWeight: "300",
            //   lineHeight: 21,
              wordWrap: "break-word",
            }}
          >
            YourBank All Rights Reserved
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#B3B3B3",
                fontSize: 14,
                fontFamily: "Lexend",
                fontWeight: "300",
                // lineHeight: 21,
                wordWrap: "break-word",
              }}
            >
              Privacy Policy
            </div>
            <div
              style={{
                width: 20,
                height:0.1,
                alignSelf: "stretch",
                transform: "rotate(90deg)",
                transformOrigin: "0 0",
                border: "1px #B3B3B3 solid",
              }}
            ></div>
            <div
              style={{
                color: "#B3B3B3",
                fontSize: 14,
                fontFamily: "Lexend",
                fontWeight: "300",
                // lineHeight: 21,
                wordWrap: "break-word",
              }}
            >
              Terms of Service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
