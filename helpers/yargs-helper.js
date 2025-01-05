import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export default function getArgs() {
  const argv = yargs(hideBin(process.argv))
    .option("buildcommand", {
      type: "string",
      description: "Custom command to compile the project.",
      demandOption: false,
    })
    .option("deploy", {
      type: "boolean",
      description:
        "Upload only the compiled version without previous generation",
      demandOption: false,
    })
    .example(
      '$0 --buildcommand "build:dev"',
      'Run the project with the custom build command "build:dev"'
    )
    .example(
      "$0 --deploy",
      "Upload only the compiled version without previous generation"
    )
    .help()
    .alias("help", "h")
    .parse();

  return argv;
}
