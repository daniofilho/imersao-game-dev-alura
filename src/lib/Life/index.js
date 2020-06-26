function Life(props) {
  const Item = props.item;

  const { sound } = props;

  const onCollide = () => {
    global.lifes++;
    if (global.lifes >= config.game.maxLifes) {
      global.lifes = config.game.maxLifes;
    }
    Item.reset();

    if (config.game.sound) sound.play();
  };

  return {
    onCollide,
    render: () => Item.render(),
    getX: () => Item.getX(),
    getY: () => Item.getY(),
    getProp: () => Item.getProp,
    getHitboxX: () => Item.getHitboxX(),
    getHitboxY: () => Item.getHitboxY(),
    getHitboxWidth: () => Item.getHitboxWidth(),
    getHitboxHeight: () => Item.getHitboxHeight(),
    reset: () => Item.reset(),
  };
}
