#include "../librerias/websocket.h"

#include <iostream>
#include <cstring>
#include <signal.h>


volatile int WebSocketServer::interrupted = 0;

WebSocketServer::WebSocketServer() : context(nullptr) {
    interrupted = 0;
}

WebSocketServer::~WebSocketServer() {
    if (context) {
        lws_context_destroy(context);
    }
}

int WebSocketServer::callback_my_protocol(struct lws *wsi, enum lws_callback_reasons reason,
                                          void *user, void *in, size_t len) {
    switch (reason) {
        case LWS_CALLBACK_ESTABLISHED:
            std::cout << "Cliente conectado\n";
            break;
        case LWS_CALLBACK_RECEIVE:
            std::cout << "Recibido: " << std::string((char*)in, len) << "\n";
            lws_write(wsi, (unsigned char *)in, len, LWS_WRITE_TEXT);
            break;
        case LWS_CALLBACK_CLOSED:
            std::cout << "Cliente desconectado\n";
            break;
        default:
            break;
    }
    return 0;
}

void WebSocketServer::signal_handler(int sig) {
    interrupted = 1;
}

void WebSocketServer::run(int port) {

    struct lws_protocols protocols[] = {
        {
            "my-protocol",
            callback_my_protocol,
            0,
            1024,
        },
        { nullptr, nullptr, 0, 0 }
    };

    struct lws_context_creation_info info;
    memset(&info, 0, sizeof(info));
    info.port = port;
    info.protocols = protocols;
    info.gid = -1;
    info.uid = -1;

    context = lws_create_context(&info);
    if (!context) {
        std::cerr << "Error creando contexto libwebsockets\n";
        return;
    }

    signal(SIGINT, signal_handler);

    std::cout << "Servidor WebSocket escuchando en puerto " << port << std::endl;
    while (!interrupted) {
        lws_service(context, 1000);
    }
    std::cout << "Servidor detenido\n";

}

