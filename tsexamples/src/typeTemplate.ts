type ChessLetters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

type ChessNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type ChessPosition = `${ChessLetters}${ChessNumbers}`

let pawnMove:ChessPosition = 'A5';

///////////////

type GapType = 'margin' | 'padding';

type PositionType = 'top' | 'bottom' | 'right' | 'left'

type GapCSS = `${GapType}-${PositionType}` | GapType

type SizeType = 'px' | 'em' | '%'

type SizeCss = `${number}${SizeType}`

type MarginPadding = {
    [key in GapCSS]?: SizeCss
}

const boxCSS: MarginPadding = {
    'margin-top':'25px',
    'padding': '5em'
}