import React from 'react';
import { mount, shallow, render } from 'enzyme';
// render a component but without sub components, testing in isolation
// import ChordEditor from './ChordEditor.test.js';

xdescribe('<ChordEditor />', () => {
  it('renders an editor area', () => {
    const editor = shallow(<ChordEditor />);
    expect(editor.find('textarea').length).toEqual(1);
  });
});

