<template>
  <div id="particles"></div>
</template>

<script>
import 'particles.js'

export default {
  props: {
    colors: {
      type: Array,
      require: false,
      default: () => []
    }
  },
  mounted() {
    // https://github.com/VincentGarreau/particles.js/
    window.particlesJS('particles', {
      // シェイプ設定
      particles: {
        // シェイプ数
        number: {
          // 要素内に表示するシェイプの数
          value: 10,
          density: {
            // シェイプ表示間隔設定
            enable: true,
            // シェイプ表示間隔指定
            value_area: 600
          }
        },
        // シェイプ色
        color: {
          value: this.colors
        },

        // シェイプの設定
        shape: {
          // シェイプ形
          type: 'circle', // circle, edge, triangle, polygon, star, image 複数指定["circle", "triangle", "image"]

          // シェイプボーダー設定
          stroke: {
            // ボーダー幅
            width: 0,
            // ボーダー色
            color: '#000000'
          },

          // シェイプの形でpolygonを指定した場合
          polygon: {
            // ポリゴン角数指定
            nb_sides: 5
          },

          // シェイプの形でimageを指定した場合
          image: {
            // 画像パス
            src: '',
            // 画像幅
            width: 100,
            // 画像高
            height: 100
          }
        },

        // シェイプ透過率指定
        opacity: {
          // 透過率指定
          value: 0.25,
          // ランダム設定
          random: true,

          // 透過アニメーション設定
          anim: {
            // アニメーション設定
            enable: true,
            // アニメーション速度
            speed: 0.1,
            // アニメーション最小透過率
            opacity_min: 0.1,
            // アニメーション同期
            sync: false
          }
        },

        // シェイプサイズ
        size: {
          // シェイプサイズ指定
          value: 120,
          // ランダムサイズ
          random: true,
          // サイズアニメーション設定
          anim: {
            // アニメーション設定
            enable: true,
            // アニメーション速度
            speed: 10,
            // アニメーション最小サイズ,
            size_min: 15,
            // アニメーション同期設定
            sync: false
          }
        },

        // シェイプを線で繋ぐか
        line_linked: {
          // 線の設定
          enable: false,
          // 線の間隔
          distance: 150,
          // 線の色
          color: '#ffffff',
          // 線の透過率
          opacity: 0.4,
          // 線の幅
          width: 1
        },

        // シェイプの動き
        move: {
          // 動きを制御するか
          enable: true,
          // 動く速度
          speed: 5,
          // 動く方向
          direction: 'none', // none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
          // ランダム
          random: true,
          // 静止状態にする
          straight: false,
          // シェイプの動き
          out_mode: 'out', // bounce:ボックス内で動かす out:ボックス外に逃がす
          // 移動中に塊始めるようにする
          attract: {
            enable: false,
            rotateX: 1000,
            rotateY: 1000
          }
        }
      },

      // インタラクティブ設定
      interactivity: {
        detect_on: 'canvas',

        // マウスイベント設定
        events: {
          // マウスオーバー時
          onhover: {
            enable: false,
            mode: 'repulse' // grad:付近のシェイプと線を繋ぐ, bubble:拡大, repulse:反発
          },

          // クリック時
          onclick: {
            // クリック時の処理
            enable: false,
            // クリック時の処理
            mode: 'repulse' // push:追加, remove:削除, bubble:拡大, repulse:反発
          },
          resize: true
        },

        // 各モード設定
        modes: {
          grab: {
            distance: 300,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 100,
            size: 7.5,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 100
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      // Retina Display対応
      retina_detect: true
    })
  }
}
</script>

<style scoped>
#particles {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
