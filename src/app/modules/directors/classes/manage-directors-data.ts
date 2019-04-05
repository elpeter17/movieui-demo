import { Director } from 'src/app/models/director.model';

export interface ManageDirectorsData {
  forCreate: boolean;
  director?: Director;
}
