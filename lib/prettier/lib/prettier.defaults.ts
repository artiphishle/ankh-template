import {
  EArrowParens,
  EEndOfLine,
  EEmbeddedLanguageFormatting,
  EHtmlWhitespaceSensitivity,
  EQuoteProps,
  ETrailingComma
} from "./types/enums";

/**
 * Prettier Defaults
 *
 * @url https://prettier.io/docs/en/options.html
 */
export default {
  /**
   * Try prettier's new ternary formatting before it becomes the default behavior
   * @default false
   * @type {boolean}
   * @config
   */
  experimentalTernaries: false,

  /**
   * Specify the line length that the printer will wrap on
   * @default 80
   * @type {number}
   * @config
   */
  printWidth: 80,

  /**
   * Specify the number of spaces per indentation-level
   * @default 2
   * @type {number}
   * @config
   */
  tabWidth: 2,

  /**
   * Indent lines with tabs instead of spaces
   * @default false
   * @type {boolean}
   * @config
   */
  useTabs: false,

  /**
   * Print semicolons at the ends of statements
   * @default true
   * @type {boolean}
   * @config
   */
  semi: true,

  /**
   * Use single quotes instead of double quotes
   * @default true
   * @type {boolean}
   * @config
   */
  singleQuote: true,

  /**
   * Change when properties in objects are quoted
   * @default EQuote.AsNeeded
   * @type {EQuoteProps}
   * @config
   */
  quoteProps: EQuoteProps.AsNeeded,

  /**
   * Use single quotes instead of double quotes in JSX
   * @default false
   * @type {boolean}
   * @config
   */
  jsxSingleQuote: false,

  /**
   * Print trailing commas wherever possible in
   * multi-line comma-separated syntactic structures.
   * (A single-line array, for example, never gets trailing commas.)
   * @default {ETrailingComma.All} // Since v3.0.0
   * @type {ETrailingComma}
   * @config
   */
  trailingComma: ETrailingComma.All,

  /**
   * Print spaces between brackets in object literals
   * @default true
   * @type {boolean}
   * @config
   */
  bracketSpacing: true,

  /**
   * Put the `>` of a multi-line JSX element at the end of the last line
   * instead of being alone on the next line
   * (does not apply to self closing elements)
   * @default false
   * @type {boolean}
   * @config
   */
  jsxBracketSameLine: false,

  /**
   * Include parentheses around a sole arrow function parameter
   * @default {EArrowParens.Always}
   * @type {EArrowParens}
   * @config
   */
  arrowParens: EArrowParens.Always,

  /**
   * Format only a segment of a file
   * @default {0}
   * @type {number}
   * @config
   */
  rangeStart: 0,

  /**
   * Format only a segment of a file
   * @default {Infinity}
   * @type {number}
   * @config
   */
  rangeEnd: Infinity,

  /**
   * Specify the file name to use to infer which parser to use
   * @type {string}
   */
  filepath: "",

  /**
   * Prettier can restrict itself to only format files that contain a special
   * comment, called a pragma, at the top of the file. This is very useful
   * when gradually transitioning large, unformatted codebases to prettier.
   * @default false
   * @type {boolean}
   * @config
   */
  requirePragma: false,

  /**
   * Prettier can insert a special '@format' marker at the top of files,
   * specifying that the file has been formatted with Prettier.
   * Works well in tandem with 'requirePragma'. Will append a new line to
   * eventual existing code block.
   * @default false
   * @type {boolean}
   * @version v1.8.0
   * @config
   */
  insertPragma: false,

  /**
   * By default, Prettier will wrap markdown text since some services use a
   * linebreak-sensitive renderer. Wrap prose to the print width with 'always'
   * @default {EProseWrap.Preserve}
   * @type {EProseWrap}
   * @version v1.8.2
   * @config
   */
  proseWrap: "preserve",

  /**
   * Specify the global whitespace sensitivity,
   * for HTML, Vue, Angular, and Handlebars
   * @url https://prettier.io/blog/2018/11/07/1.15.0#whitespace-sensitive-formatting
   * @default {EHtmlWhitespaceSensitivity.Css}
   * @type {EHtmlWhitespaceSensitivity}
   * @version v1.15.0
   */
  htmlWhitespaceSensitivity: EHtmlWhitespaceSensitivity.Css,

  /**
   * Whether or not to indent the code inside <script> and <style> tags
   * in Vue files
   * @default false
   * @type {boolean}
   * @version v1.19.0
   */
  vueIndentScriptAndStyle: false,

  /**
   * All modern text editors in all operating systems are able to correctly
   * display line endings when \n (LF) is used.
   * @default {EEndOfLine.Lf}	}
   * @type {EEndOfLine}
   * @version v1.15.0
   * @config
   */
  endOfLine: EEndOfLine.Lf,

  /**
   * Control whether Prettier formats quoted code embedded in the file.
   * @default {EEmbeddedLanguageFormatting.Auto}
   * @type {EEmbeddedLanguageFormatting}
   * @version v2.1.0
   * @config
   */
  embeddedLanguageFormatting: EEmbeddedLanguageFormatting.Auto,

  /**
   * Enforce single attribute per line in HTML, Vue and JSX
   * @default false
   * @type {boolean}
   * @version v2.6.0
   * @config
   */
  singleAttributePerLine: false
};
