#!/bin/bash
set -x

if [ $TRAVIS_BRANCH == 'TravisConfiguration' ] ; then
  eval "$(ssh-agent -s)"
  cp travis_rsa ~/.ssh/id_rsa
  chmod 600 ~/.ssh/id_rsa
  ssh-add
  scp -pro StrictHostKeyChecking=no dist/Resume/* travis@138.197.196.1:/var/www/html/
else
  echo "Not deploying since this is a different branch"
fi
