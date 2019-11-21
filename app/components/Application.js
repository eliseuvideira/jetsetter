import React, { Component } from 'react';
import Items from './Items';
import NewItem from './NewItem';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ value: 'Pants', id: Date.now(), packed: false }],
    };
    this.addItem = this.addItem.bind(this);
    this.markAsPacked = this.markAsPacked.bind(this);
    this.markAllAsUnpacked = this.markAllAsUnpacked.bind(this);
  }

  addItem(item) {
    const otherItems = this.state.items.filter((i) => i.id !== item.id);
    this.setState({ items: otherItems.concat(item) });
  }

  markAsPacked(item) {
    const otherItems = this.state.items.filter((other) => other.id !== item.id);
    const updatedItem = Object.keys(item).reduce((previous, current) => {
      previous[current] = item[current];
      return previous;
    }, {});
    updatedItem.packed = !updatedItem.packed;
    this.setState({ items: otherItems.concat(updatedItem) });
  }

  markAllAsUnpacked() {
    const items = this.state.items.map((item) =>
      Object.assign({}, item, { packed: false }),
    );
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    console.log(items);
    const unpackedItems = items.filter((item) => !item.packed);
    const packedItems = items.filter((item) => item.packed);
    console.log({ packedItems, unpackedItems });
    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <Items
          title="Unpacked Items"
          items={unpackedItems}
          onCheckOff={this.markAsPacked}
        />
        <Items
          title="Packed Items"
          items={packedItems}
          onCheckOff={this.markAsPacked}
        />
        <button className="full-width" onClick={this.markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
