#!/bin/sh

REMOTE=hyperec2

sftp $REMOTE <<EOF
	put -fR out/* /var/www/hyperloopmanchester.com/
EOF
