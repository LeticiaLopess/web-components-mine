import { Component, h, Prop } from '@stencil/core';

@Component({ 
  tag: 'wj-button', 
  styleUrl: './wj-button.css',
  shadow: true 
}) 

export class WjButton {
  
  @Prop() bg: 'primary' | 'secondary' | 'negative';
  @Prop() border: 'rounded' | 'square';
  @Prop() iconPosition: 'left' | 'right';
  @Prop() buttonIcon: string;

  render () {
    return (
      <button class={`font-[Raleway] outline-none antialiased hover:shadow-lg hover:shadow-[#c3c7c7]/70 transition-all ease-out duration-300 flex items-center py-2 pl-4 pr-4 text-button !h-[40px] inline-block 
      ${this.bg === 'primary'
          ? 'bg-primary/80 text-white font-semibold hover:bg-[#3676e0] hover:shadow-md active:bg-[#2a5caf]'
          : this.bg === 'secondary'
          ? 'bg-[#197e85] text-white font-semibold hover:bg-[#11575e] hover:shadow-md active:bg-[#11575e]'
          : this.bg === 'negative' 
          ? 'bg-[#f44336] text-white font-semibold hover:bg-[#922820] hover:shadow-md active:bg-[#922820]'
          : ''
      }

      ${this.border === 'rounded' ? 'rounded-full' 
      : this.border === 'square' ? 'rounded-lg'
      : ''
      }
      
      `}
      >

      {this.iconPosition === 'left' && <span class="material-symbols-sharp text-xl leading-none mr-3">{this.buttonIcon}</span>}
      <slot></slot>
      {this.iconPosition === 'right' && <span class="material-symbols-sharp text-xl leading-none ml-3">{this.buttonIcon}</span>}
      
      </button>
    )
  }
}
