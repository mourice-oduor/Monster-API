CREATE TABLE monsters (
    id serial,
    name varchar(50),
    personality varchar(50)
);

CREATE TABLE habitats (
    id serial,
    name varchar(50),
    climate varchar(50),
    temperature integer
);

CREATE TABLE lives (
    monster varchar(50),
    habitat varchar(50)
);

INSERT INTO monsters (name, personality) VALUES ('Frankenstein', 'grumpy');
INSERT INTO monsters (name, personality) VALUES ('Dracula', 'friendly');
INSERT INTO monsters (name, personality) VALUES ('Mummy', 'friendly');
INSERT INTO monsters (name, personality) VALUES ('Werewolf', 'grumpy');
INSERT INTO monsters (name, personality) VALUES ('Zombie', 'friendly');

INSERT INTO habitats (name, climate, temperature) VALUES ('cave', 'cold', 3);
INSERT INTO habitats (name, climate, temperature) VALUES ('graveyard', 'cold', 5);
INSERT INTO habitats (name, climate, temperature) VALUES ('forest', 'cold', 10);
INSERT INTO habitats (name, climate, temperature) VALUES ('house', 'warm', 20);
INSERT INTO habitats (name, climate, temperature) VALUES ('lair', 'warm', 20);
INSERT INTO habitats (name, climate, temperature) VALUES ('village', 'warm', 20);

INSERT INTO lives (monster, habitat) VALUES ('Frankenstein', 'cave');
INSERT INTO lives (monster, habitat) VALUES ('Dracula', 'graveyard');
INSERT INTO lives (monster, habitat) VALUES ('Mummy', 'graveyard');
INSERT INTO lives (monster, habitat) VALUES ('Werewolf', 'forest');
INSERT INTO lives (monster, habitat) VALUES ('Zombie', 'house');
INSERT INTO lives (monster, habitat) VALUES ('Zombie', 'lair');
INSERT INTO lives (monster, habitat) VALUES ('Zombie', 'village');
