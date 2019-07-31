/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useContext, useEffect } from "react";
import WebSocket from "./WebSocket";
import { DispatchContext, StateContext } from "../store/context";
import { Button } from "../Controls";
import { sendMessage } from "../store/actions";

// For testing
const SOCKET_URL_ECHO = "wss://echo.websocket.org";

const Game = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const { gameStarted, isDeveloperMode, nodes, message } = state;

  const SOCKET_URL_DCV = `ws://${nodes.dcv}`;
  const SOCKET_URL_BVV = `ws://${nodes.bvv}`;
  const SOCKET_URL_PLAYER1 = `ws://${nodes.player1}`;
  const SOCKET_URL_PLAYER2 = `ws://${nodes.player2}`;

  const [webSocketKey, setWebSocketKey] = useState(0);

  // Rerender the WebSocket components and thus reconnect when the nodes in state get updated
  useEffect(() => {
    setWebSocketKey(Math.random());
  }, [nodes]);

  return (
    <div>
      <div
        css={css`
          position: absolute;
          z-index: 5;
          top: 4;
        `}
      >
        {gameStarted === false && (
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(7, 1fr);
              grid-template-rows: repeat(3, 1fr);
            `}
          >
            <Button
              label="Start"
              onClick={() => {
                sendMessage({ method: "game" }, "dcv", state, dispatch);
              }}
            />
          </div>
        )}
      </div>
      <div
        css={css`
          position: absolute;
          z-index: 5;
          left: 0;
          top: 2.7rem;
        `}
      />
      <WebSocket
        nodeName="dcv"
        server={
          isDeveloperMode ? process.env.DEV_SOCKET_URL_DCV : SOCKET_URL_DCV
        }
        message={message.dcv}
        key={webSocketKey + 1}
      />
      <WebSocket
        nodeName="bvv"
        server={
          isDeveloperMode ? process.env.DEV_SOCKET_URL_BVV : SOCKET_URL_BVV
        }
        message={message.bvv}
        key={webSocketKey + 2}
      />
      <WebSocket
        nodeName="player1"
        server={
          isDeveloperMode
            ? process.env.DEV_SOCKET_URL_PLAYER1
            : SOCKET_URL_PLAYER1
        }
        message={message.player1}
        key={webSocketKey + 3}
      />
      <WebSocket
        nodeName="player2"
        server={
          isDeveloperMode
            ? process.env.DEV_SOCKET_URL_PLAYER2
            : SOCKET_URL_PLAYER2
        }
        message={message.player2}
        key={webSocketKey + 4}
      />
      {isDeveloperMode && (
        <WebSocket
          nodeName="echo"
          server={SOCKET_URL_ECHO}
          message={message.echo}
          key={webSocketKey + 5}
        />
      )}
    </div>
  );
};

export default Game;
