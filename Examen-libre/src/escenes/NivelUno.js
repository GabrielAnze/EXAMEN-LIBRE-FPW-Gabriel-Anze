import Tanque from '../classes/Tanque.js';

export default class NivelUno extends Phaser.Scene {
    constructor() {
        super('NivelUno');
    }

    init(data) {
        this.playerName = data.playerName;
        this.tankType = data.tankType;
    }

    preload() {
        this.load.image('ground', 'public\images\plataforma.png');
        this.load.image('bullet', 'public\images\bullet.png');
        this.load.image('tank1', 'public\images\tanque1.png');
        this.load.image('tank2', 'public\images\tanque2.png');
        this.load.image('tank3', 'public\images\tanque3.png');
        // Cargar más assets aquí
    }

    create() {
        this.add.image(400, 300, 'background');

        // Crear plataformas
        const platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        // Crear jugador
        this.player = new Tanque(this, 100, 450, `tank${this.tankType}`);

        // Colisión entre jugador y plataformas
        this.physics.add.collider(this.player, platforms);

        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();

        // Puntuación
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });

        // Vidas
        this.healthText = this.add.text(16, 50, 'Health: 3', { fontSize: '32px', fill: '#fff' });

        // Eventos
        this.events.on('gameOver', this.gameOver, this);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.moveBackward();
        } else if (this.cursors.right.isDown) {
            this.player.moveForward();
        } else {
            this.player.stop();
        }

        if (this.cursors.up.isDown) {
            this.player.jump();
        }

        if (this.cursors.space.isDown) {
            this.player.shoot();
        }

        // Actualizar texto de salud
        this.healthText.setText(`Health: ${this.player.health}`);
    }

    gameOver() {
        this.scene.start('GameOver', { score: this.score });
    }
}

