import { Component, h, Prop } from '@stencil/core';

//'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'

@Component({
  tag: 'default-button',
  styleUrl: './button.css',
  shadow: true,
})

export class CButton {

  @Prop() buttonBg: 'primary' | 'secondary';
  @Prop() buttonType: 'rounded' | 'square';
  @Prop() buttonIcon: string;
  @Prop() iconPosition: 'left' | 'right';

  render() {
  
  
    return (

      <button class={`CButton ${this.buttonBg === 'primary' ? 'bg-primary/80 text-white font-semibold outline-none antialiased hover:bg-primary hover:shadow-md hover:shadow-neutral-light active:bg-primary-dark transition-all ease-out duration-300' : this.buttonBg === 'secondary' ? 'bg-secondary text-white font-semibold outline-none antialiased hover:bg-secondary-dark hover:shadow-md hover:shadow-neutral-light active:bg-secondary-darker transition-all ease-in-out duration-300' : ''}
                              ${this.buttonType === 'rounded' ? 'flex items-center py-2 px-4 capitalize rounded-full inline-block' : this.buttonType === 'square' ? 'flex items-center py-2 px-4 capitalize rounded-xl inline-block' : ''}
                              ${this.buttonIcon === ''}
                              ${this.iconPosition === 'left'}
      `}>
        {this.iconPosition === 'left' && <span class="material-symbols-sharp text-xl leading-none mr-3">{this.buttonIcon}</span>}
        <slot></slot>
        {this.iconPosition === 'right' && <span class="material-symbols-sharp text-xl leading-none ml-3">{this.buttonIcon}</span>}
      </button>

    );
  }

}