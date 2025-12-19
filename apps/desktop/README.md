### Wayland issues:

- _Failed to create GBM buffer of size {width}x{height}: Invalid argument_

  > add `WEBKIT_DISABLE_DMABUF_RENDERER=1` to the start command

- _Error 71 / Wayland protocol violation_

  > force x11 by adding `GDK_BACKEND=x11` to the start command

> Example `WEBKIT_DISABLE_DMABUF_RENDERER=1 GDK_BACKEND=x11 npm run tauri dev`
