cmd_Release/UwU.node := ln -f "Release/obj.target/UwU.node" "Release/UwU.node" 2>/dev/null || (rm -rf "Release/UwU.node" && cp -af "Release/obj.target/UwU.node" "Release/UwU.node")
