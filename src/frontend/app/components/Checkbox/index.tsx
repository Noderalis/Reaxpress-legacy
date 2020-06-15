import React from 'react';

interface ICheckboxProps {
  children?: React.ReactNode;
  labelOn: string;
  labelOff: string;
}

interface ICheckboxState {
  isChecked: boolean;
}

export class CheckboxWithLabel extends React.Component<
  ICheckboxProps,
  ICheckboxState
> {
  public constructor(props: ICheckboxProps) {
    super(props);

    this.state = { isChecked: false };
    this.onChange = this.onChange.bind(this);
  }

  private onChange(): void {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render(): JSX.Element {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}
