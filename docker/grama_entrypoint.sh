#!/bin/sh
npx prisma generate && npx prisma db push 
exec "$@"