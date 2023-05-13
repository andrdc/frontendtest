import { ChessBoardModel } from '../models/chess-board.model';
import { Tile } from '../models/tile.model';
import { getChessBoardTiles } from '../helpers/chess-board.helper';

class ChessBoard implements ChessBoardModel {
  tiles: Array<Array<Tile>> = getChessBoardTiles();
  clickTracker: Array<String> = [];
}

export const chessBoard = new ChessBoard();