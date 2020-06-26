import { PlayerType } from './core/Player/types';
import { ScenarioType } from './core/Scenario/types';

// # Config
export interface gameConfigType {
  fps: number;
  speed: number;
  sound: boolean;
}

export interface scenarioConfigType {
  imageFile: string;
  soundFile: string;
}
export interface scenarioType {
  config: scenarioConfigType;
  sound?: any; // @TODO: what type is it?
  image?: any; // @TODO: what type is it?
  instance?: ScenarioType;
}

export interface playerConfigType {
  imageFile: string;
  imageFileWidth: number;
  imageFileHeight: number;
  x: number;
  y: number;
  width: number;
  height: number;
  spriteX0: number;
  spriteY0: number;
  spriteWidth: number;
  spriteHeight: number;
}
export interface playerType {
  config: playerConfigType;
  image?: any; // @TODO: what type is it?
  sound?: string;
  instance?: PlayerType;
}
