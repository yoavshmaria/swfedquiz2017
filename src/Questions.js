export const Questions = [
    {
        title: `Which of the following options won’t promise to log 24 for the following script?`,
        description:
            `(async () => {
    let a = await ___________;
    let b = a * 2;
    console.log(b);
})()`,
        answers: [
            {
                id: 1,
                text: `new Promise(resolve => resolve(12))`
            },
            {
                id: 2,
                text: `setTimeout( ()=>12 )`
            },
            {
                id: 3,
                text: `12`
            },
            {
                id: 4,
                text: `(()=>12)()`
            }
        ],
    },
    {
        title: `What would make a React component re-render faster ?`,
        answers: [
            {
                id: 1,
                text:
`let newItem = _.clone(this.state.item);
newItem.options.sortable = false;
this.setState({ item: newItem });`
            },
            {
                id: 2,
                text:
`this.setState({
  item: Object.assign(this.state.item, {
    options: {
      sortable: false
    }
  })
});`
            },
            {
                id: 3,
                text:
`this.setState({
  item: {
    …this.state.item,
    options: {
    …this.state.item.options,
    sortable: false
    }
  }
});`
            },
        ],
    },
    {
        title: `What will be the output to console?`,
        description:
`const one = () => new Promise((resolve, reject) => resolve("one"));
const two = () => one()
  .then(res => new Promise((resolve, reject) => reject(\`$\{res} two\`)))
  .catch(res => new Promise((resolve, reject) => resolve(\`$\{res} 2\`)));

const three = () => two()
  .then(res => new Promise((resolve, reject) => resolve(\`$\{res} three\`)))
  .catch(res => new Promise((resolve, reject) => resolve(\`$\{res} 3\`)));

three().then(res => console.log(res));`,
        answers: [
            {
                id: 1,
                text: `one two 2 three`
            },
            {
                id: 2,
                text: `one 2 two three`
            },
            {
                id: 3,
                text: `one three 2 two`
            },
            {
                id: 4,
                text: `two three 2 one`
            },
        ]
    },
    {
        title: `How many times will the component be rendered?`,
        description:
`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.state = {
      meaningLessFlag: true
    }
  }
  componentWillMount() {
    this.setState({
      meaningLessFlag:false
    })
  }

  componentDidMount() {
    this.setState({
      meaningLessFlag:true
    })
  }
  render() {
    this.index++;
    return (
      <div>
        {this.index}
      </div>
    );
  }
}`,
        answers: [
            {
                id: 1,
                text: `0`
            },
            {
                id: 2,
                text: `1`
            },
            {
                id: 3,
                text: `2`
            },
            {
                id: 4,
                text: `3`
            },
        ]
    },
    {
        title: `What is the way to change the name prop from MyComponent render() function?`,
        description:
`<MyComponent>
	<ChildComponent name="danny"></ChildComponent>
</MyComponent>`,
        answers: [
            {
                id: 1,
                text:
`render() { 
      const child = React.Children.only(this.props.children);
      child.props.name = "david"; 
      return this.props.children; 
}`
            },
            {
                id: 2,
                text:
`render() { 
      const child = React.Children.only(this.props.children);
      return <child name = "david" />; 
}`
            },
            {
                id: 3,
                text:
`render() { 
      const child = React.Children.only(this.props.children);
      return React.cloneElement(child, { name: "david" });
}`
            },
            {
                id: 4,
                text:
`render() { 
      const child = React.Children.only(this.props.children);
      child.props = { name: "david"}; 
      return this.props.children; 
}`
            },
        ]
    },
    {
        title: `Which node express method causes the request to always be handled?`,
        answers: [
            {
                id: 1,
                text: `app.get(“*”, ...);`,
            },
            {
                id: 2,
                text: `app.getAll(“*”, ...);`,
            },
            {
                id: 3,
                text: `app.use(“*”, ...);`,
            },
            {
                id: 4,
                text: `app.always(“*”, ...);`,
            },
        ],
    },
    {
        title: `Chrome extensions: which permission is being used in order to inject code to a website`,
        answers: [
            {
                id: 1,
                text: `"*"`,
            },
            {
                id: 2,
                text: `<this_url>`,
            },
            {
                id: 3,
                text: `activeTab`,
            },
            {
                id: 4,
                text: `None of the above`,
            },
        ],
    },
];