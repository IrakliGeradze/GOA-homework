# const os = require("os");
# const util = require("util");


# console.log("=== NODE CORE MODULES DEMO ===");
# console.log("Program started...");
# console.warn("This is a warning message");
# console.error("This is an error example (just demo)");


# console.log("\n=== PROCESS INFO ===");

# console.log("Process ID:", process.pid);
# console.log("Node Version:", process.version);
# console.log("Platform:", process.platform);

# // command line arguments
# console.log("\nCommand line arguments:", process.argv);

# // example usage of argv
# const args = process.argv.slice(2);
# console.log("User arguments:", args);

# if (args.length > 0) {
#     console.log("First argument:", args[0]);
# } else {
#     console.log("No arguments provided");
# }


# console.log("\n=== OS INFO ===");

# console.log("CPU Count:", os.cpus().length);
# console.log("OS Type:", os.type());
# console.log("Platform:", os.platform());
# console.log("Free Memory:", os.freemem());
# console.log("Total Memory:", os.totalmem());
# console.log("Uptime:", os.uptime());


# console.log("\n=== UTIL DEMO ===");

# // util.format
# const name = "Giorgi";
# const age = 20;

# const formatted = util.format("User %s is %d years old", name, age);
# console.log(formatted);

# // util.inspect
# const obj = {
#     user: "Nika",
#     skills: ["JS", "Node", "SQL"],
#     active: true
# };

# console.log("Object inspect:");
# console.log(util.inspect(obj, { showHidden: false, depth: null }));


# console.log("\n=== LOOP DEMO ===");

# for (let i = 1; i <= 5; i++) {
#     console.log("Count:", i);
# }

# // simple function demo
# function sum(a, b) {
#     return a + b;
# }

# console.log("Sum result:", sum(10, 15));


# console.log("\nProgram finished successfully!");