import * as React from 'react';
import {
  DetailsHeader,
  DetailsList,
  IGroup,
  IGroupDividerProps,
  IDetailsListProps,
  IDetailsGroupRenderProps,
  SelectionMode,
  CheckboxVisibility,
} from '@fluentui/react/lib/DetailsList';
import { Icon } from '@fluentui/react/lib/Icon';
import { getTheme, mergeStyleSets } from '@fluentui/react/lib/Styling';
import styles from './AddinWebpart.module.scss';
import { ISpfxw2Props } from './ISpfxw2Props';
import { ISpfxw2State } from './ISpfxw2State';
import { escape } from '@microsoft/sp-lodash-subset';
import { searchservice } from "../../Services/searchservice"
const ROW_HEIGHT: number = 42; // from DEFAULT_ROW_HEIGHTS in DetailsRow.styles.ts
const GROUP_HEADER_AND_FOOTER_SPACING: number = 8;
const GROUP_HEADER_AND_FOOTER_BORDER_WIDTH: number = 1;
const GROUP_HEADER_HEIGHT: number = 100;
const GROUP_FOOTER_HEIGHT: number = GROUP_HEADER_AND_FOOTER_SPACING * 4 + GROUP_HEADER_AND_FOOTER_BORDER_WIDTH * 2;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const theme = getTheme();
const classNames = mergeStyleSets({
  headerAndFooter: {
    borderTop: `${GROUP_HEADER_AND_FOOTER_BORDER_WIDTH}px solid ${theme.palette.neutralQuaternary}`,
    borderBottom: `${GROUP_HEADER_AND_FOOTER_BORDER_WIDTH}px solid ${theme.palette.neutralQuaternary}`,
    padding: GROUP_HEADER_AND_FOOTER_SPACING,
    margin: `${GROUP_HEADER_AND_FOOTER_SPACING}px 0`,
    background: theme.palette.neutralLighterAlt,
    // Overlay the sizer bars
    position: 'relative',
    zIndex: 100,
  },
  headerTitle: {
    display: 'inline-flex'
  },
  headerLinkSet: {
    margin: '4px -8px',
  },
  icon: {
    padding: '2%',
    margin: '1%',
    height: '10px',
    width: '10px',
    border: '1px black solid',
    cursor: 'pointer'
  },
  active: {
    padding: '2%',
    margin: '1%',
    height: '10px',
    width: '10px',
    border: '1px black solid',
    cursor: 'pointer',
    background: 'blue'
  },
  sort: {
    cursor: 'pointer',
    marginLeft: '95%'
  },
  headerLink: {
    margin: '0 8px',
  },
});
let b;
let flag=1;
const ITEMS_PER_GROUP = 24;
const GROUP_COUNT = 24;

export default class AddinWebpart extends React.Component<ISpfxw2Props, ISpfxw2State, {}> {
  private searchservice: searchservice;
  public wlist = []
  constructor(props: ISpfxw2Props) {
    super(props);
    this.state = { items: [], filtered: false, letter: '' };
    this.searchservice = new searchservice();
  }
  public sort() {
console.log("helll sort");
if(flag==1){
    var temp=this.wlist//copying the state variables and current values in temp boject variable 
    temp=temp.reverse();//revers
    this.setState({items:temp});//just changing the required varibale
    flag=0;
  }
  else{
    this.setState({items:this.wlist});
    flag=1;
  }
}
  public fill = e => {

    console.log(e.target.className)
    if (e.target.classList == 'active-114') {
      console.log("hello from classname");
      this.setState({ items: this.wlist, filtered: false, letter: '' });
      e.target.className = classNames.icon;
      b = null;
    }
    else {
      this.filtering(e.target.innerHTML);
      e.target.className = classNames.active;
      if (b != null) {
        b.className = classNames.icon;
      }
      b = e.target;
    }

  }
  public filtering(letter: String) {
    console.log("hello from filtering");

    let upletter = letter.toUpperCase();


    let x = this.wlist.filter(function (i) {
      console.log(i.PreferredName[0], letter)
      return i.PreferredName[0] == letter || i.PreferredName[0] == upletter;
    })
    console.log(x), "xxxx";
    this.setState({ letter: letter, filtered: true, items: x })
  }



  public componentDidMount() {

    this.searchservice.getSearchResults(this.props.context, '*').then((result: any) => {
      this.wlist = result;
      console.log(result, "result")
      result.sort(function (a, b) {
        if (a.PreferredName[0] > b.PreferredName[0]) return 1;
        if (a.PreferredName[0] < b.PreferredName[0]) return -1;
        return 0;
      });
      console.log(result, "result")
      this.setState({ items: result });

    });
  }
  public render(): React.ReactElement<ISpfxw2Props> {
    return (
      <div className={styles.addinWebpart}>
        <div className={styles.container}>
          <div className={classNames.headerAndFooter}>
            <div className={classNames.headerTitle}>
              {alphabet.map((alpha) => (
                <p className={classNames.icon} onClick={this.fill}>{alpha}</p>
              ))}

            </div>

            <div className={classNames.headerLinkSet}>
              <Icon iconName="Sort" className={classNames.sort} onClick={this.sort} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <DetailsList
                items={this.state.items}

                getGroupHeight={this._getGroupHeight}

              />



            </div>
          </div>
        </div>
      </div>
    );
  }



  private _getGroupTotalRowHeight = (group: IGroup): number => {
    return group.isCollapsed ? 0 : ROW_HEIGHT * group.count;
  };

  private _getGroupHeight = (group: IGroup, _groupIndex: number): number => {
    return GROUP_HEADER_HEIGHT + GROUP_FOOTER_HEIGHT + this._getGroupTotalRowHeight(group);
  };

}
