export interface IMessage {
  action?: string;
  addr?: string;
  addrs?: string[];
  amount?: number;
  balance?: number;
  backend_status: number;
  bet_amount?: number;
  big_blind?: number;
  table_stack_in_chips: number;
  deal?: {
    balance?: number;
    board?: string[];
    holecards?: [string, string];
  };
  game?: { gametype: string; pot: number[] };
  gui_playerID?: number;
  method?: string;
  minRaiseTo?: number;
  player_funds?: number[];
  playerid?: number;
  pot?: number;
  seats?: [{ name: string; playing: number; seat: number }];
  showInfo?: {
    allHoleCardsInfo?: string[][];
    boardCardInfo?: string[];
  };
  small_blind?: number;
  possibilities?: number[];
  toPlayer?: number;
  toCall?: number;
  warning_num: number;
  win_amount?: number;
  winners?: number[];
}
