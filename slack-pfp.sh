#!/bin/sh

while :; do
	read -p '(url) ' URL; EURL=$?
	read -p '(name) ' NAME; ENAME=$?
	[ $EURL -eq 0 -a $ENAME -eq 0 ] && curl -o "./public/members/$NAME.jpg" "$URL"
done
