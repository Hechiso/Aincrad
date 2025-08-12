#ifndef WEBSOCKET_H
#define WEBSOCKET_H

#include <libwebsockets.h>

class WebSocketServer {
private:
    struct lws_context *context;
    static volatile int interrupted;

    static int callback_my_protocol(struct lws *wsi, enum lws_callback_reasons reason,
                                    void *user, void *in, size_t len);

    static void signal_handler(int sig);

public:
    WebSocketServer();
    ~WebSocketServer();

    void run(int port);
};

#endif // WEBSOCKET_H

