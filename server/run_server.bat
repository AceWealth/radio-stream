docker run -it -p 80:80 -p 2222:22 -v %userprofile%\.ssh\id_rsa.pub:/root/.ssh/authorized_keys:ro -v "%userprofile%\Dropbox\Application Settings\beets_data":/radio-stream/data -v "%userprofile%\Music\beets-music":/radio-stream/music -v "%userprofile%\Dropbox\Projects\music-stream\server\beets":/radio-stream/beets vitalybe/radio-stream /bin/sh