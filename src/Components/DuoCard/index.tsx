import { Text, TouchableOpacity, View } from 'react-native';
import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';

import { DuoInfo } from './DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weeksDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />
      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      />
    
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weeksDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`
        }
      />
      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? "sim" : "não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}