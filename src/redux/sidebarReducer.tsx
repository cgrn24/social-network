import { SidebarType } from './state'

let initialState = {
  friendsData: [
    {
      id: 245,
      name: 'Kimi Raikkonen',
      avatar: 'https://cdn.racingnews365.com/Riders/Raikkonen/_570x570_crop_center-center_none/f1_2021_kr_alf_lg.png?v=1643809079',
    },
  ],
}

const sidebarReducer = (state: SidebarType = initialState, action: any) => {
  return state
}

export default sidebarReducer
