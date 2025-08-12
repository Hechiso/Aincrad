#include "librerias/websocket.h"

int main() {

    WebSocketServer server;
    server.run(9000);
    return 0;

}

