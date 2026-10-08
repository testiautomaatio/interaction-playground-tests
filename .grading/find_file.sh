#!/bin/bash

if find . -type f -name "$1" -print -quit | grep -q .; then
    echo "File '$1' was found"
else
    echo "File '$1' was not found."
    echo ""
    echo "This file was supposed to be created during the test execution."
    echo "Make sure that the correct file name is used in your test cases."
    exit 1
fi
